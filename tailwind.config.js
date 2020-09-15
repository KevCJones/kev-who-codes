module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Cabin",
      serif: "Arvo",
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
