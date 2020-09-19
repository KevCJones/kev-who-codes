import React from "react"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.2,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ProfileImage = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <animated.div
      onTouchMove={({ touches }) =>
        set({ xys: calc(touches[0].clientX, touches[0].clientY) })
      }
      onTouchEndCapture={() => set({ xys: [0, 0, 1] })}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
        backgroundImage: "url(./kev.jpg)",
        backgroundSize: "cover",
      }}
    ></animated.div>
  )
}

export default ProfileImage
