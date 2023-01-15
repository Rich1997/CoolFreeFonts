import Logo from '../assets/images/Logo';

const Navbar = () => {
    return (
        <nav className="px-12 w-full default-border-b">
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
            </div>
        </nav>
    );
};

export default Navbar;
