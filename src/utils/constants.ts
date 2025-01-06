// Mode options for color animation
export const ANIMATION_MODES = {
  FIXED_COLOR_1: 1,
  FIXED_COLOR_2: 2,
  HEARTBEAT_1: 4,
  HEARTBEAT_2: 5,
  SMOOTH_GRADIENT: 6,
  FLASH: 7,
} as const;

// Animation durations in milliseconds
export const ANIMATION_DURATIONS = {
  SMOOTH: 350,
  FLASH_MIN: 100,
  FLASH_MAX: 600,
  HEARTBEAT: 500,
} as const;

// Default values
export const DEFAULTS = {
  MODE: ANIMATION_MODES.HEARTBEAT_1,
  COLOR_1: 0,
  COLOR_2: 10,
  LEVEL: 0,
} as const;