import { useEffect } from 'react';

function useUpdateLogger<T>(value: T): void {
    useEffect(() => console.log(value), [value]);
}
export default useUpdateLogger;
