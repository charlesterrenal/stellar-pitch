import { useRef, useEffect } from 'react'

export function useDraggableScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const mouseDown = (e: MouseEvent) => {
      isDown = true
      el.classList.add('is-dragging')
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }

    const mouseLeave = () => {
      isDown = false
      el.classList.remove('is-dragging')
    }

    const mouseUp = () => {
      isDown = false
      el.classList.remove('is-dragging')
    }

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      el.scrollLeft = scrollLeft - walk
    }

    el.addEventListener('mousedown', mouseDown)
    el.addEventListener('mouseleave', mouseLeave)
    el.addEventListener('mouseup', mouseUp)
    el.addEventListener('mousemove', mouseMove)

    return () => {
      el.removeEventListener('mousedown', mouseDown)
      el.removeEventListener('mouseleave', mouseLeave)
      el.removeEventListener('mouseup', mouseUp)
      el.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return ref
}
