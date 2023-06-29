import * as React from "react";

export const GlobalContext = React.createContext({});

export const InputHooksProvider = ( {children} ) =>{
    const [rangeValue, setRangeValue] = React.useState(50);

    const [isCheck, setIsCheck] = React.useState(false);
    const [newvalue, setNewValue] = React.useState(rangeValue);

    const getAnualPrice = () => {
        const newState = !isCheck;
        setIsCheck(newState);
        if (rangeValue) {
            setNewValue(rangeValue * 12 * 0.75) ;
        };
    };

    return(
        <GlobalContext.Provider
            value={{
                rangeValue,
                setRangeValue,
                isCheck,
                setIsCheck,
                newvalue,
                setNewValue,
                getAnualPrice
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useInputHooksContext = () => {
    const { rangeValue, setRangeValue, isCheck, setIsCheck, newvalue, setNewValue, getAnualPrice } = React.useContext(GlobalContext);

    return { rangeValue, setRangeValue, isCheck, setIsCheck, newvalue, setNewValue, getAnualPrice };
};
