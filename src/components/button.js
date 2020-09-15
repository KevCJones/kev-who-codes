import React from "react"

const Button = props => (
  <div
    className={
      "text-white border-solid border-2 border-blue-600 rounded-md hover:bg-blue-700 duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center " +
      props.className
    }
  >
    {props.children}
  </div>
)

export default Button
