import { Accessor, createMemo } from "solid-js"

import {
  darkThemeClass,
  lighThemeClass,
  ctpThemeClass,
  novadustThemeClass,
} from "../theme/theme.css"
import { createStorage } from "../utils"

export type Mode = "dark" | "light" | "gooseppuccin" | "novadust"
export interface ModeState {
  get: Accessor<Mode>
  toggle: () => void
  class: Accessor<string>
  set: (mode: Mode) => void
}

const themes: Record<Mode, string> = {
  dark: darkThemeClass,
  light: lighThemeClass,
  gooseppuccin: ctpThemeClass,
  novadust: novadustThemeClass,
}

const modeOrder: Mode[] = ["dark", "light", "gooseppuccin", "novadust"]

export const useThemeMode = (): ModeState => {
  const [mode, setMode] = createStorage<Mode>("theme-mode", "novadust")
  const themeClass = createMemo(() => themes[mode() || "novadust"])

  const toggleMode = () => {
    const next = modeOrder[(modeOrder.indexOf(mode()) + 1) % modeOrder.length]
    setMode(next)
  }

  return { get: mode, toggle: toggleMode, set: setMode, class: themeClass }
}
