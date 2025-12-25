import type { Ref } from 'vue'

/**
 * Vue 3 指令类型定义
 * 这些类型定义会在模板中使用指令时提供类型检查和自动补全
 * 
 * 注意：Vue 3 的模板类型检查主要通过 Volar 插件实现
 * 确保你的 IDE 安装了 Volar 插件以获得完整的类型支持
 */
declare module 'vue' {
  interface GlobalDirectives {
    // v-permission: 权限控制
    vPermission?: string | string[]
    // v-debounce: 防抖 (arg: "event-delay", 如 "click-300")
    vDebounce?: () => void
    // v-throttle: 节流 (arg: "event-delay", 如 "click-300")
    vThrottle?: () => void
    // v-copy: 复制到剪贴板
    vCopy?: string | number
    // v-loading: 加载状态
    vLoading?: boolean
    // v-clickOutside: 点击外部触发
    vClickOutside?: () => void
    // v-longpress: 长按触发 (arg: 延迟时间，默认300)
    vLongpress?: () => void
    // v-money: 金额格式化
    vMoney?: string | number
    // v-ellipsis: 文本省略 (arg: 行数)
    vEllipsis?: number
    // v-focus: 自动聚焦
    vFocus?: boolean
    // v-waterMarker: 水印
    vWaterMarker?: {
      text: string
      font?: string
      textColor?: string
    }
    // v-backtop: 返回顶部 (arg: 目标元素id)
    vBacktop?: number
    // v-draggable: 可拖拽
    vDraggable?: boolean
    // v-input: 输入限制 (arg: "number" | "decimal" | "customize")
    vInput?: number | string
    // v-highlight: 高亮背景 (arg: 背景颜色)
    vHighlight?: string
    // v-emoji: 禁止输入emoji
    vEmoji?: boolean
    // v-flicker: 闪烁动画
    vFlicker?: boolean
    // v-hover: 鼠标悬停
    vHover?: () => void
    // v-onOnce: 只触发一次 (arg: 事件名，默认'click')
    vOnOnce?: () => void
    // v-doubleClick: 双击触发 (arg: 时间间隔，默认300)
    vDoubleClick?: () => void
    // v-empty: 空状态
    vEmpty?: {
      content?: string
      img?: string
      visible: boolean | Ref<boolean>
    }
    // v-lazyImg: 懒加载图片
    vLazyImg?: string
    // v-ripple: 波纹效果
    vRipple?: string
    // v-slideIn: 滑入动画
    vSlideIn?: {
      px?: number
      time?: number
    }
    // v-resize: 调整大小
    vResize?: boolean
  }
}

export {}
