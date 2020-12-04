import React from 'react'

import type { ColorMode, Mode } from '@definitions/color-mode'

import { isDev } from '@utils/env'

function setScript(initialValue: Mode) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const systemPreference: ColorMode = mql.matches ? 'dark' : 'light'

  let persistedPreference: Mode

  try {
    persistedPreference = localStorage.getItem('theme') as Mode
  } catch (error) {
    console.log(
      'localStorage is not available. Color mode persistence might not work as expected',
    )
  }

  const isInStorage = typeof persistedPreference === 'string'

  let colorMode: Mode

  if (isInStorage) {
    colorMode = persistedPreference
  } else {
    colorMode = initialValue === 'system' ? systemPreference : initialValue
  }

  if (colorMode) {
    const root = document.documentElement
    root.style.setProperty('theme', colorMode)
  }
}

interface ColorModeScriptProps {
  initialColorMode?: Mode
}

/**
 * Script to add to the root of your application when using localStorage,
 * to help prevent flash of color mode that can happen during page load.
 */
export const ColorModeScript: React.FC<ColorModeScriptProps> = (props) => {
  const { initialColorMode = 'light' } = props
  const html = `(${String(setScript)})('${initialColorMode}')`
  return <script dangerouslySetInnerHTML={{ __html: html }} />
}

if (isDev) {
  ColorModeScript.displayName = 'ColorModeScript'
}

export default ColorModeScript
