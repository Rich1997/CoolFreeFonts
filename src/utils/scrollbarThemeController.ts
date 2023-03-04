import { Theme } from '../context/ThemeContext';

const scrollbarThemeController = (theme: Theme) => {
    document.documentElement.setAttribute(
        'data-color-scheme',
        theme === 'dark' ? 'dark' : 'light'
    );
};

export default scrollbarThemeController;
