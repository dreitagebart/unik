import { useEffect, useRef, useState } from 'react'

interface Props {
  root?: Element | null
  rootMargin?: string
  threshold?: number | Array<number>
}

export const useIntersection = ({
  root = null,
  rootMargin,
  threshold = 0
}: Props) => {
  const [entry, setEntry] = useState<any>({})
  const [node, setNode] = useState<any>(null)

  const observer = useRef<any>(null)

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new window.IntersectionObserver(
      ([entry]) => setEntry(entry),
      {
        root,
        rootMargin,
        threshold
      }
    )

    const { current: currentObserver } = observer

    if (node) {
      currentObserver.observe(node)
    }

    return () => currentObserver.disconnect()
  }, [node, root, rootMargin, threshold])

  return [setNode, entry]
}
