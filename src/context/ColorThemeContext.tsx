import { createContext, ReactNode, useContext, useState } from 'react';

enum colorThemes {
    default = 'Default',
    rose = 'rose',
    sky = 'sky',
}

export type colorThemeType = {
    colorTheme: colorThemes;
    primaryColor: string;
};

export type ColorThemeContextType = {
    color: colorThemes;
    setTheme: (colorTheme: colorThemes) => void;
};

export const ColorThemeContext = createContext<ColorThemeContextType>({
    color: colorThemes.default,
    setTheme: (color: colorThemes) => {},
});

export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider = (props: { children: ReactNode }) => {
    const [colorTheme, setColorTheme] = useState(
        localStorage.getItem('colorTheme') !== null
            ? (localStorage.getItem('colorTheme') as colorThemes)
            : colorThemes.default
    );

    return (
        <ColorThemeContext.Provider
            value={{ color: colorTheme, setTheme: setColorTheme }}
        >
            {props.children}
        </ColorThemeContext.Provider>
    );
};
