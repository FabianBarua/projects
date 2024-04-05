import { useMousePosition } from '../hooks/useMousePosition'
import { detectMob } from '../utils/logic'

export const MouseFollower = () => {
  if (window.chrome === undefined) return null
  if (detectMob()) return null

  const { cursor } = useMousePosition()

  return (
    <div className=' pointer-events-none z-20 fixed  top-0 right-0 left-0 bottom-0'>
      <div className=' w-full h-full relative '>
        <div
          style={{ left: `${cursor.x - 15}px`, top: `${cursor.y - 15}px` }}
          className=' pointer-events-none w-9 h-9 rounded-full absolute bg-neutral-800/50 border border-neutral-600'
        />
      </div>
    </div>
  )
}
