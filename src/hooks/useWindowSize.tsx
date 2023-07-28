import { useState } from 'react';
import useEventlListener from './useEventlListener';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight,
    });

    useEventlListener('resize', () =>
        setWindowSize({
            x: window.innerWidth,
            y: window.innerHeight,
        })
    );

    return windowSize;
}
export default useWindowSize;
