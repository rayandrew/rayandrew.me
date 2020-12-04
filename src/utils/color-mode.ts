import { isBrowser } from '@utils/dom'
import { noop } from '@utils/noop'

import { colorMode } from '@configs/theme'

import type { ColorMode } from '@definitions/color-mode'

const classNames = {
  light: '',
  dark: 'dark',
}

/**
 * SSR: Graceful fallback for the `body` element
 */
const mockBody = {
  classList: { add: noop, remove: noop },
}

const getHtml = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return isBrowser ? document.querySelector('html')! : mockBody
}

/**
 * Function to add/remove class from `body` based on color mode
 */
export function syncBodyClassName(isDark: boolean) {
  const html = getHtml()
  if (isDark) html.classList.add(classNames.dark)
  if (!isDark) html.classList.remove(classNames.dark)
}

/**
 * Check if JS media query matches the query string passed
 */
function getMediaQuery(query: string) {
  const mediaQueryList = window.matchMedia?.(query)
  if (!mediaQueryList) {
    return undefined
  }
  return !!mediaQueryList.media === mediaQueryList.matches
}

export const queries = {
  light: '(prefers-color-scheme: light)',
  dark: '(prefers-color-scheme: dark)',
}

export const lightQuery = queries.light
export const darkQuery = queries.dark

export function getColorScheme(fallback?: ColorMode) {
  const isDark = getMediaQuery(queries.dark) ?? fallback === 'dark'
  return isDark ? 'dark' : 'light'
}

/**
 * Adds system os color mode listener, and run the callback
 * once preference changes
 */
export function addListener(fn: (mode: ColorMode) => void) {
  if (!('matchMedia' in window)) {
    return noop
  }

  const mediaQueryList = window.matchMedia(queries.dark)

  const listener = () => {
    fn(mediaQueryList.matches ? 'dark' : 'light')
  }

  listener()
  mediaQueryList.addEventListener('change', listener)

  return () => {
    mediaQueryList.addEventListener('change', listener)
  }
}

export const root = {
  get: () =>
    document.documentElement.style.getPropertyValue(colorMode.key) as ColorMode,
  set: (mode: ColorMode) => {
    if (isBrowser) {
      document.documentElement.style.setProperty(colorMode.key, mode)
    }
  },
}
