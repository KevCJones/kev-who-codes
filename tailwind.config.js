const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: ["bg-keyboard-lg"],
    },
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        "keyboard-lg": "url('/bg_optim.webp')",
      }),
      colors: {
        primary: colors.blue[600],
        nearblack: "#111418",
      },
    },
    fontFamily: {
      sans: "Cabin",
      serif: "Arvo",
    },
  },
  variants: {
    backgroundImage: ["responsive", "hover", "focus"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
