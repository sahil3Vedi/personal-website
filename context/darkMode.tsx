import { createContext, useContext, useState, useMemo } from 'react'

// Creating a React Context
const DarkModeContext = createContext({})

// Creating a Wrapper for that Context

export function DarkModeWrapper({ children }: any) {
    const [darkMode, setDarkMode] = useState(true) // because the app is not initially in dark mode

    const toggleDarkMode = () => {
        setDarkMode(v => !v)
    }

    const values = useMemo(
        () => ({ darkMode, toggleDarkMode }),
        [darkMode]
    );

    return (
        <DarkModeContext.Provider value={values}>
            {children}
        </DarkModeContext.Provider>
    );
}

// Function to use the Context
export function useDarkModeContext() {
    return useContext(DarkModeContext);
}


