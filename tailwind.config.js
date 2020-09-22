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
        secondary: "#db3154",
        nearblack: "#111418",
        slategrey: "#15171e",
      },
      typography: theme => ({
        default: {
          css: {
            color: "#a9abb3",
            blockquote: "#a9abb3",
            a: {
              color: "#a9abb3",
              "&:hover": {
                color: "#fff",
              },
            },
          },
        },
      }),
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
