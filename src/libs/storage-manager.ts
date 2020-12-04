// https://github.com/chakra-ui/chakra-ui/blob/27e8ce7da8810c61a73399e82f5a02a316a4c762/packages/color-mode/src/storage-manager.ts

import type { ColorMode } from '@definitions/color-mode'

import { colorMode } from '@configs/theme'

const hasLocalStorage = typeof Storage !== 'undefined'

export interface StorageManager {
  get(init?: ColorMode): ColorMode | undefined
  set(value: ColorMode): void
  type: 'cookie' | 'localStorage'
}

/**
 * Simple object to handle read-write to localStorage
 */
export const localStorageManager: StorageManager = {
  get(init?) {
    if (!hasLocalStorage) {
      return init
    }

    const maybeValue = window.localStorage.getItem(colorMode.key) as ColorMode

    return maybeValue ?? init
  },
  set(value) {
    if (hasLocalStorage) {
      window.localStorage.setItem(colorMode.key, value)
    }
  },
  type: 'localStorage',
}
