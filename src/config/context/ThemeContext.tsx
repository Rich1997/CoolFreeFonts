import { createContext, useContext, useState } from 'react';

export enum Theme {
    dark = 'dark',
    light = 'light',
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.dark,
    setTheme: (theme) => console.warn('no theme provider'),
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = (props: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState(Theme.dark);
    return (
        <ThemeContext.Provider
            value={{ theme: darkMode, setTheme: setDarkMode }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};
