/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

import type { ColorMode } from '@definitions/color-mode'
import { noop } from '@utils/noop'

export type ColorModeContextT = {
  colorMode: ColorMode
  toggleColorMode: () => void
  setColorMode: (value: ColorMode) => void
}

export const defaultValue: ColorModeContextT = {
  colorMode: 'light',
  toggleColorMode: noop,
  setColorMode: noop,
}

export const ColorModeContext = React.createContext<ColorModeContextT>(
  defaultValue,
)

export const useColorMode = () => {
  const context = React.useContext(ColorModeContext)
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider')
  }
  return context
}

export const useIsDarkMode = () => {
  const { colorMode } = useColorMode()
  return React.useMemo(() => colorMode === 'dark', [colorMode])
}

export const useIsLightMode = () => {
  const { colorMode } = useColorMode()
  return React.useMemo(() => colorMode === 'light', [colorMode])
}

export function useColorModeValue<TLight = unknown, TDark = unknown>(
  light: TLight,
  dark: TDark,
) {
  const isDark = useIsDarkMode()
  return isDark ? dark : light
}
