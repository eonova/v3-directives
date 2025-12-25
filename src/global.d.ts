declare module 'vue' {
  interface GlobalDirectives {
    vPermission: {
      value: string | string[]
      modifiers: { readonly?: boolean }
    }
    vDebounce: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vClickOutside: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vCopy: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vDoubleClick: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vDraggable: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vEllipsis: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vEmoji: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vEmpty: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vFlicker: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vFocus: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vHighlight: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vHover: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vInput: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vLazyImg: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vLoading: { 
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vLongpress: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vMoney: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vOnOnce: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vResize: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vRipple: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vSlideIn: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vThrottle: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
    vWaterMarker: {
      value: () => void
      modifiers: { immediate?: boolean }
    }
  }
}

export {}
