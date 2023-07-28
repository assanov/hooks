import { useEffect, useRef } from 'react';
import isEqual from 'lodash/fp/isEqual';

function useDeepCompareEffect(
    callback: () => void,
    dependencies: React.DependencyList
) {
    const currentDependenciesRef = useRef({});

    if (!isEqual(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies;
    }

    useEffect(callback, [currentDependenciesRef.current]);
}
export default useDeepCompareEffect;
