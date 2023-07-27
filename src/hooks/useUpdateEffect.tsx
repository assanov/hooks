import { useEffect, useRef } from 'react';

//Similar to useEffect, but fist render is skipped
function useUpdateEffect(callback: () => void, deps: React.DependencyList) {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        callback();
    }, deps);
}
export default useUpdateEffect;
