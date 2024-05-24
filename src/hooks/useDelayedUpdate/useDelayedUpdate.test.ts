import { act, renderHook } from '@testing-library/react'
import { expect, describe, test, vi, beforeEach, afterEach } from 'vitest'
import { useDelayedUpdate } from './useDelayedUpdate'

const onPersist = vi.fn()

describe('useDelayedUpdate', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.useRealTimers()
  })

  test('it should set temp value, call onPersist, then clear temp value', () => {
    const { result } = renderHook(() => useDelayedUpdate({ onPersist }))

    act(() => result.current.setTempValue('newValue'))
    expect(result.current.tempValue).toBe('newValue')
    expect(onPersist).toHaveBeenCalledTimes(0)

    act(() => vi.runOnlyPendingTimers())
    expect(result.current.tempValue).toBe('newValue')
    expect(onPersist).toHaveBeenCalledTimes(1)

    act(() => vi.runOnlyPendingTimers())
    expect(result.current.tempValue).toBe(null)
    expect(onPersist).toHaveBeenCalledTimes(1)
  })

  test('it should not update state or call onPersist if unmounted before first timeout expires', () => {
    const { result, unmount } = renderHook(() =>
      useDelayedUpdate({ onPersist })
    )

    act(() => result.current.setTempValue('temp'))
    unmount()
    act(() => vi.runOnlyPendingTimers())

    expect(result.current.tempValue).toBe('temp')
    expect(onPersist).toHaveBeenCalledTimes(0)
  })

  test('it should not update state if unmounted after first timeout but before second timeout expires', () => {
    const { result, unmount } = renderHook(() =>
      useDelayedUpdate({ onPersist })
    )

    act(() => result.current.setTempValue('temp'))
    act(() => vi.runOnlyPendingTimers())
    expect(onPersist).toHaveBeenCalledTimes(1)
    unmount()
    act(() => vi.runOnlyPendingTimers())

    expect(result.current.tempValue).toBe('temp')
  })
})
