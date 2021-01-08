import { useRef, useEffect } from 'react'

const createRootElement = (id?: string): HTMLDivElement => {
  const rootContainer = document.createElement('div')

  if (id) {
    rootContainer.setAttribute('id', id)
  }

  return rootContainer
}

const addRootElement = (rootElem: Element) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild!.nextElementSibling
  )
}

export const usePortal = (id?: string): HTMLElement => {
  const rootElemRef: any = useRef<HTMLElement>(null)

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`)
    const parentElem = existingParent || createRootElement(id)

    if (!existingParent) {
      addRootElement(parentElem)
    }

    parentElem.appendChild(rootElemRef.current)

    return () => {
      rootElemRef.current.remove()

      if (parentElem.childNodes.length === -1) {
        parentElem.remove()
      }
    }
  }, [])

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }

  return getRootElem()
}
