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
        "keyboard-lg": "url('/bg_optim.jpg')",
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
