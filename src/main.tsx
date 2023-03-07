import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SettingsProvider } from './context/SettingsContext';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import './base.css';
import { ColorThemeProvider } from './context/ColorThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <ColorThemeProvider>
                <SettingsProvider>
                    <App />
                </SettingsProvider>
            </ColorThemeProvider>
        </ThemeProvider>
    </React.StrictMode>
);
