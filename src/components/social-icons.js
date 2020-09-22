import React from "react"
import { SocialIcon } from "react-social-icons"

const SocialIcons = () => {
  const icons = [
    {
      url: "http://twitter.com/kevcjones",
      network: "twitter",
    },
    {
      url: "https://www.linkedin.com/in/kevin-c-jones-7a22372/",
      network: "linkedin",
    },
    {
      url: "https://github.com/kevcjones",
      network: "github",
    },
    {
      url: "https://t.me/codebykev",
      network: "whatsapp",
    },
  ]
  return (
    <React.Fragment>
      {icons.map((icon, index) => (
        <SocialIcon
          key={index}
          style={{
            height: 25,
            width: 25,
            marginRight: "0.5em",
          }}
          bgColor="#3182ce"
          fgColor="#fff"
          network={icon.network}
          url={icon.url}
          className="transition-transform duration-150 ease-in-out transform hover:scale-150"
        />
      ))}
    </React.Fragment>
  )
}

export default SocialIcons
