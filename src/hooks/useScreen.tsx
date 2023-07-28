import { useEffect, useState } from 'react';

function useScreen(ref, rootMargin = '100px') {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (ref.current == null) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            {
                rootMargin,
            }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current == null) return;
            observer.unobserve(ref.current);
        };
    }, [ref.current, rootMargin]);

    return visible;
}
export default useScreen;
