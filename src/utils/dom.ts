// https://github.com/chakra-ui/chakra-ui/blob/0c02af811615c784001e317ce8b85f2bccef5f4d/packages/utils/src/dom.ts

let win: Window | undefined

try {
  win = window
} catch (e) {
  /* no-op */
}

export const getWindow = (node?: HTMLElement | null) =>
  node?.ownerDocument?.defaultView ?? win

function checkIsBrowser() {
  const win = getWindow()
  return Boolean(
    typeof win !== 'undefined' && win.document && win.document.createElement,
  )
}

export const isBrowser = checkIsBrowser()
