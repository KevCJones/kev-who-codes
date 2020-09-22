import React from "react"

const Button = props => (
  <div
    className={
      "text-white border-solid border-2 border-primary rounded-sm hover:bg-primary duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center transition-all " +
      props.className
    }
  >
    {props.children}
  </div>
)

export default Button
