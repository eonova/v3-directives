import type { Placement as BasePlacement } from '@floating-ui/dom'

export type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end'

const basePlacements = ['auto', 'top', 'bottom', 'left', 'right'] as const

export const placements: Placement[] = basePlacements.flatMap(
  base =>
    ([base, `${base}-start`, `${base}-end`] as Placement[])
)
