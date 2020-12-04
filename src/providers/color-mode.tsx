import React from 'react'

import type { ColorMode } from '@definitions/color-mode'

import { localStorageManager, StorageManager } from '@libs/storage-manager'

import { ColorModeContext, ColorModeContextT } from '@contexts/color-mode'

import withDefaults from '@utils/with-default'
import { isBrowser } from '@utils/dom'
import {
  addListener,
  getColorScheme,
  root,
  syncBodyClassName,
} from '@utils/color-mode'

interface Props {
  initialColorMode?: ColorMode
  useSystemColorMode?: boolean
  colorModeManager?: StorageManager
}

const defaultProps = {
  initialColorMode: 'light',
  colorModeManager: localStorageManager,
  useSystemColorMode: false,
}

// type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>
export type ColorModeProviderProps = Props & typeof defaultProps

const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  initialColorMode,
  useSystemColorMode,
  colorModeManager,
  children,
}) => {
  /**
   * Only attempt to retrieve if we're on the server. Else this will result
   * in a hydration mismatch warning and partially invalid visuals.
   *
   * Else fallback safely to `theme.config.initialColormode` (default light)
   */
  const [colorMode, rawSetColorMode] = React.useState<ColorMode | undefined>(
    colorModeManager.type === 'cookie'
      ? colorModeManager.get(initialColorMode)
      : initialColorMode,
  )

  React.useEffect(() => {
    /**
     * Since we cannot initially retrieve localStorage to due above mentioned
     * reasons, do so after hydration.
     *
     * Priority:
     * - system color mode
     * - defined value on <ColorModeScript />, if present
     * - previously stored value
     */
    if (isBrowser && colorModeManager.type === 'localStorage') {
      const mode = useSystemColorMode
        ? getColorScheme(initialColorMode)
        : root.get() || colorModeManager.get()

      if (mode) {
        rawSetColorMode(mode)
      }
    }
  }, [colorModeManager, useSystemColorMode, initialColorMode])

  React.useEffect(() => {
    const isDark = colorMode === 'dark'

    syncBodyClassName(isDark)
    root.set(isDark ? 'dark' : 'light')
  }, [colorMode])

  const setColorMode = React.useCallback(
    (value: ColorMode) => {
      colorModeManager.set(value)
      rawSetColorMode(value)
    },
    [colorModeManager],
  )

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }, [colorMode, setColorMode])

  React.useEffect(() => {
    let removeListener: any
    if (useSystemColorMode) {
      removeListener = addListener(setColorMode)
    }
    return () => {
      if (removeListener && useSystemColorMode) {
        removeListener()
      }
    }
  }, [setColorMode, useSystemColorMode])

  // presence of `value` indicates a controlled context
  const context: ColorModeContextT = {
    colorMode: colorMode as ColorMode,
    toggleColorMode: toggleColorMode,
    setColorMode: setColorMode,
  }

  return (
    <ColorModeContext.Provider value={context}>
      {children}
    </ColorModeContext.Provider>
  )
}

export default withDefaults(ColorModeProvider, defaultProps)
