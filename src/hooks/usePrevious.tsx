import { useRef } from 'react';

function usePrevious<T>(v?: T): T | undefined {
    const currentRef = useRef<T | undefined>(v);
    const previousRef = useRef<T | undefined>();

    if (currentRef.current !== v) {
        previousRef.current = currentRef.current;
        currentRef.current = v;
    }
    return previousRef.current;
}
export default usePrevious;
