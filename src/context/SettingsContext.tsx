import { createContext, useContext, useState } from 'react';

type SettingsType = {
    fontSize: string;
};

type SettingsContextProps = {
    children: React.ReactNode;
};

export const Settings = {
    fontSize: '160px',
};

export type SettingsContextType = {
    settings: SettingsType;
    setSize: (size: string) => void;
};

const SettingsContext = createContext<SettingsContextType>({
    settings: Settings,
    setSize: (size: string) => {},
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: SettingsContextProps) => {
    const [state, setState] = useState(Settings);

    const onFontSizeChange = (value: string) => {
        setState({
            ...state,
            fontSize: value,
        });
    };

    return (
        <SettingsContext.Provider
            value={{ settings: state, setSize: onFontSizeChange }}
        >
            {children}
        </SettingsContext.Provider>
    );
};
