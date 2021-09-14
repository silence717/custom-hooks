import { useRef } from 'react'
import isEqual from 'lodash.isequal'

export default function useDeepMemo<TKey, TValue>(memoFn: () => TValue, key: TKey): TValue {
    const ref = useRef<{ key: TKey; value: TValue }>()

    if (!ref.current || !isEqual(key, ref.current.key)) {
        ref.current = { key, value: memoFn() }
    }

    return ref.current.value
}