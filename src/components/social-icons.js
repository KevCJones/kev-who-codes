import React from "react"
import { SocialIcon } from "react-social-icons"

const SocialIcons = () => {
  return (
    <div>
      <SocialIcon
        style={{
          height: 25,
          width: 25,
          marginRight: "0.5em",
          marginTop: "1em",
        }}
        bgColor="#3182ce"
        fgColor="#fff"
        url="http://twitter.com/kevcjones"
        className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
      />
      <SocialIcon
        style={{
          height: 25,
          width: 25,
          marginRight: "0.5em",
          marginTop: "1em",
        }}
        bgColor="#3182ce"
        fgColor="#fff"
        url="https://www.linkedin.com/in/kevin-c-jones-7a22372/"
        className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
      />
      <SocialIcon
        style={{
          height: 25,
          width: 25,
          marginRight: "0.5em",
          marginTop: "1em",
        }}
        bgColor="#3182ce"
        fgColor="#fff"
        url="https://github.com/kevcjones"
        className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
      />
      <SocialIcon
        style={{
          height: 25,
          width: 25,
          marginRight: "0.5em",
          marginTop: "1em",
        }}
        network="whatsapp"
        bgColor="#3182ce"
        fgColor="#fff"
        url="https://t.me/codebykev"
        className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
      />
    </div>
  )
}

export default SocialIcons
