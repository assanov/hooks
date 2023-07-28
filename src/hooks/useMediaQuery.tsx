import { useEffect, useState } from 'react';
import useEventlListener from './useEventlListener';

function useMediaQuery(mediaQuery: string) {
    const [isMatch, setIsMatch] = useState(false);
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>();

    useEffect(() => {
        const list = window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQuery]);

    useEventlListener('change', (e) => setIsMatch(e.matches), mediaQueryList);

    return isMatch;
}
export default useMediaQuery;
