import * as React from 'react'
import { useInputHooksContext } from '../contexts/GlobalContext';

export const InputToggle = () => {
const { isCheck, setIsCheck, getAnualPrice } = useInputHooksContext();

    return (
        <label className="switch">
            <input
                aria-labelledby='checkbox'
                type="checkbox"
                checked={isCheck}
                onClick={getAnualPrice}
                onChange={() => setIsCheck(!isCheck)}
            />
            <span className="slider" />
        </label>
    )
}

