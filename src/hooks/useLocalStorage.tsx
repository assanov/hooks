import { useEffect, useState } from 'react';

function getItem<Type>(key: string, initialValue: Type | (() => Type)): Type {
    const savedValue = localStorage.getItem(key);

    if (typeof savedValue === 'string') {
        return JSON.parse(savedValue);
    }

    if (initialValue instanceof Function) return initialValue();

    return initialValue;
}

function saveItem<Type>(key: string, value: Type): void {
    localStorage.setItem(key, JSON.stringify(value));
}

function useLocalStorage<Type>(
    key: string,
    initialValue: Type | (() => Type)
): [Type, (v: Type) => void] {
    const [value, setValue] = useState(() => getItem(key, initialValue));

    useEffect(() => {
        saveItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
