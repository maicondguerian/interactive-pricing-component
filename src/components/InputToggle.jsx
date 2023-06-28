import * as React from 'react'
import { useInputHooksContext } from '../contexts/GlobalContext';

export const InputToggle = () => {
const { isCheck, setIsCheck, getAnualPrice } = useInputHooksContext();

    return (
        <label  htmlFor='checkbox' className="switch">
            <input
                id='checkbox'
                type="checkbox"
                checked={isCheck}
                onClick={getAnualPrice}
                onChange={() => setIsCheck(!isCheck)}
            />
            <span className="slider" />
        </label>
    )
}

