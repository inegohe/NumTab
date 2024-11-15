import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const [ darkMode, setDarkMode ] = useState(false);
    const [ value, setValue ] = useState(null);
    const [ expression, setExpression ] = useState('');
    const [ calculation, setCalculation ] = useState('');

    return (
        <GlobalContext.Provider
        value={{
            darkMode,
            setDarkMode,
            value,
            setValue,
            expression,
            setExpression,
            calculation,
            setCalculation
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}