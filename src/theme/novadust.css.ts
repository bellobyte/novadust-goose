// Novadust color palette — original theme by mmartamg (https://github.com/mmartamg/novadust)

export const tokens = {
  shadowHsl: "213deg 31% 8%",
  fg: {
    base: "#cfd1d1",    // basic-gray
    muted: "#74859a",   // washed-blue
    hover: "#f7f5e9",   // almost-white
    press: "#84dca1",   // percy-blue
    focus: "#84dca1",   // percy-blue

    active: {
      base:  "#84dca1", // percy-blue
      hover: "#a0e8b8", // percy-blue light
      press: "#6bc888", // percy-blue dark
      focus: "#a0e8b8", // percy-blue light
    },
  },
  bg: {
    base:    "#1d2833", // dark-blue
    surface: "#18222b", // darkest-blue
    primary: "#84dca1", // percy-blue accent
    hover:   "#273341", // mid-blue
  },
}
