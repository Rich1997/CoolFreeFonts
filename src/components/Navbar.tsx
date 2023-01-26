import CircleHalfStroke from '../assets/images/icons/CircleHalfStroke';
import Logo from '../assets/images/Logo';
import { useTheme, Theme } from '../config/context/ThemeContext';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="px-12 w-full default-bg default-text default-border-b">
            <div className="md:p-0 py-4 div max-w-7xl flex gap-8 items-center justify-between mx-auto">
                <Logo size={24} />
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
