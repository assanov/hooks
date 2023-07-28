import useEventlListener from './useEventlListener';

function useClickOutside(ref, cb) {
    useEventlListener(
        'click',
        (e) => {
            if (ref.current == null || ref.current.contains(e.target)) return;
            cb();
        },
        document
    );
}
export default useClickOutside;
