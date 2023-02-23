import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SettingsProvider } from './config/context/SettingsContext';
import { ThemeProvider } from './config/context/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider>
        <SettingsProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </SettingsProvider>
    </ThemeProvider>
);
