import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import Doelger from "typography-theme-doelger"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

// delete Doelger.googleFonts

const typography = new Typography(Doelger)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
