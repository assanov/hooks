import { useEffect, useRef } from 'react';

function useEventlListener(
    eventType: string,
    callback: (e: unknown) => void,
    element = window
) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const handler = (e: unknown) => callbackRef.current(e);
        element.addEventListener(eventType, handler);

        return element.removeEventListener(eventType, handler);
    }, [eventType, element]);
}
export default useEventlListener;
