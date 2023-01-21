import CircleHalfStroke from '../assets/images/icons/CircleHalfStroke';
import Logo from '../assets/images/Logo';
import { useTheme, Theme } from '../config/context/ThemeContext';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="px-12 w-full default-bg default-text default-border-b">
            <div className="div max-w-7xl flex justify-between mx-auto">
                <div className="pr-12 py-8 font-black tracking-tighter text-4xl flex items-center justify-center">
                    <Logo size={24} />
                </div>
                <div className="items-center justify-center default-border-l h5 md-mobile-flex">
                    <div className="p-8 default-border-r cursor-pointer default-hover">
                        Gallery
                    </div>
                    <div className="p-8 default-border-r cursor-pointer default-hover">
                        Sans
                    </div>
                    <div className="p-8 default-border-r cursor-pointer default-hover">
                        Serif
                    </div>
                </div>
                <button
                    type="button"
                    className="ml-4 dark:hover:text-gray-100 hover:text-black"
                    onClick={() =>
                        setTheme(theme === 'dark' ? Theme.light : Theme.dark)
                    }
                >
                    <CircleHalfStroke size={18} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
