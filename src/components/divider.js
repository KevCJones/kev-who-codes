import React from "react"

const Divider = props => {
  const styles = props.styles || {}
  const dividerStyles = {
    position: "relative",
    bottom: styles.bottom || "0",
    left: "0",
    width: "100%",
    overflow: "hidden",
    lineHeight: "0",
    transform: styles.transform || "rotate(180deg)",
  }

  const svgStyles = {
    position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "28px",
  }

  const shapefillStyles = {
    fill: styles.color || "#ebf4ff",
  }

  return (
    <div style={dividerStyles}>
      <svg
        style={svgStyles}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 0L0 0 598.97 114.72 1200 0z"
          style={shapefillStyles}
        ></path>
      </svg>
    </div>
  )
}

export default Divider
