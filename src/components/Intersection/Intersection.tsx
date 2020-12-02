import React from 'react'

import { useIntersection } from '../../hooks'

interface Props {
  root?: Element | null
  rootMargin?: string
  threshold?: number | Array<number>
  children: (ref: any, entry: IntersectionObserverEntry) => any
}

export const Intersection: React.FC<Props> = ({
  children,
  root,
  rootMargin,
  threshold
}) => {
  const [ref, entry] = useIntersection({ root, rootMargin, threshold })

  return children(ref, entry)
}
