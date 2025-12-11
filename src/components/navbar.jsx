import { useDispatch, useSelector } from "react-redux";
import { navLinks } from "../websiteContent";
import Button from "./button";
import { showMenu } from "../store/portfolioSlice";

function Navbar({scrollProgress}) {
    const dispatch = useDispatch();
    const menuIsOpen = useSelector((state) => state.showMenu.menuIsOpen);

    const toggleMenu = () => {
        dispatch(showMenu());
    };

    const navLinkStyle = "font-[500] hover:opacity-70 ";

    return (
        <>
            {/* Top Navbar */}
            <div className="w-full sticky top-0 bg-[#ffffff21] backdrop-blur-[9px] z-50">
                <nav className="flex items-center justify-between w-full p-4">
                    
                    {/* Logo */}
                    <h1 className="text-[1.5rem] font-[600]">
                        OUSSAMA
                        <span className="text-[#b5b5b5]">TH</span>
                    </h1>

                    {/* Desktop Links */}
                    <div className="max-lg:hidden">
                        <ul className="flex items-center gap-[1.2rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a className={navLinkStyle} href={link.linkPath}>
                                        {link.linkName}
                                    </a>
                                </li>
                            ))}
                           
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        className="menuBtn hidden max-lg:flex text-2xl cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
                <div className="sticky top-0 bg-[var(--lightMode-light-text-color)]" style={{height: 5, width: `${scrollProgress}%`}}></div>
            </div>

            {/* Mobile Slide Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl p-6 transition-transform duration-300 z-50
                ${menuIsOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-[600]">MENU</h1>
                    <i
                        className="fa-solid fa-xmark text-2xl cursor-pointer"
                        onClick={toggleMenu}
                    ></i>
                </div>

                <ul className="flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                className={navLinkStyle}
                                href={link.linkPath}
                                onClick={toggleMenu}
                            >
                                {link.linkName}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    );
}

export default Navbar;
