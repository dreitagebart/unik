import { useCallback, useRef } from 'react'
import debounce from 'lodash.debounce'
import { DebounceSettings } from 'lodash'

export const useDebouncedFn = (
  callback: any,
  delay: number,
  options?: DebounceSettings
) => {
  const callbackRef = useRef<any>()

  callbackRef.current = callback

  return useCallback(
    debounce(
      (...args) => {
        callbackRef.current(...args)
      },
      delay,
      options
    ),
    []
  )
}
