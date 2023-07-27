import { useCallback, useEffect, useRef } from 'react';

function useTimeout(
    callback: () => void,
    delay: number
): { reset: () => void; clear: () => void } {
    const callbackRef = useRef<() => void>(callback);
    const timeoutRef = useRef<number>();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [set, clear]);

    return { reset, clear };
}
export default useTimeout;
