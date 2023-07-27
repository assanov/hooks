import { useState } from 'react';

function useToggle(defaultValue: boolean): [boolean, (v?: boolean) => void] {
    const [value, setValue] = useState<boolean>(defaultValue);

    function toggleValue(value?: boolean) {
        if (typeof value === 'boolean') {
            return setValue(value);
        }

        setValue((currentValue) => !currentValue);
    }

    return [value, toggleValue];
}
export default useToggle;
