import React from "react"

const Button = props => (
  <div
    className={
      "text-white bg-blue-600 rounded-md hover:bg-blue-700 text-center " +
      props.className
    }
  >
    {props.children}
  </div>
)

export default Button
