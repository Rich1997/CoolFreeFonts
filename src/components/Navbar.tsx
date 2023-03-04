import Logo from '../assets/images/Logo';

const Navbar = () => {
    return (
        <nav className="md:px-12 px-6 w-full default-bg default-text default-border-b">
            <div className="md:p-0 py-6 div flex gap-8 items-center justify-between mx-auto">
                <Logo size={24} />
                <div className="items-center justify-center h4 md-mobile-flex">
                    <div className="p-8 default-border-x cursor-pointer hover-nav-element">
                        Gallery
                    </div>
                    <div className="p-8 default-border-x cursor-pointer hover-nav-element">
                        Sans
                    </div>
                    <div className="p-8 default-border-x cursor-pointer hover-nav-element">
                        Serif
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
