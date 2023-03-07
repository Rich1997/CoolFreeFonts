import { createContext, ReactNode, useContext, useState } from 'react';

export enum colorThemes {
    default = 'default',
    rose = 'rose',
    sky = 'sky',
}

export type colorThemeType = {
    colorTheme: colorThemes;
    primaryColor: string;
};

export type ColorThemeContextType = {
    color: colorThemes;
    setColor: (colorTheme: colorThemes) => void;
};

export const ColorThemeContext = createContext<ColorThemeContextType>({
    color: colorThemes.default,
    setColor: (color: colorThemes) => {},
});

export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider = (props: { children: ReactNode }) => {
    const [colorTheme, setColorTheme] = useState(
        localStorage.getItem('homeSelection') !== null
            ? (localStorage.getItem('homeSelection') as colorThemes)
            : colorThemes.default
    );

    return (
        <ColorThemeContext.Provider
            value={{ color: colorTheme, setColor: setColorTheme }}
        >
            {props.children}
        </ColorThemeContext.Provider>
    );
};
