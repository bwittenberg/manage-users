import { useCallback, useEffect, useRef, useState } from 'react'

export const useDelayedUpdate = <T>({
  onPersist
}: {
  onPersist: (value: T) => void
}) => {
  const [value, setValue] = useState<T | null>(null)
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const setTempValue = useCallback(
    (newValue: T) => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
      setValue(newValue)
      timeoutIdRef.current = setTimeout(() => {
        onPersist(newValue)
        timeoutIdRef.current = setTimeout(() => {
          setValue(null)
        }, 2000)
      }, 1000)
    },
    [onPersist]
  )

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  return { tempValue: value, setTempValue }
}
