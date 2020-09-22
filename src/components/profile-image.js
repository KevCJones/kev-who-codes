import React from "react"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 3) / 5,
  (x - window.innerWidth / 2) / 5,
  1.1,
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
      className="w-64 h-64 m-4 mx-auto border-2 border-solid rounded-full shadow-md border-secondary hover:shadow-lg"
      onTouchEnd={() => set({ xys: [0, 0, 1] })}
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
