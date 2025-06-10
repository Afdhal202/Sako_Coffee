import React from "react";
import { Link } from "react-router";


function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="navbar px-4 md:px-8 lg:px-16 mx-auto bg-base-100 fixed z-50 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl md:text-2xl lg:text-5xl">☕ Sako Coffee</a>
            </div>
            {/* Hamburger menu for sm, md, lg */}
            <div className="flex-none lg:hidden">
                <button
                    className="btn btn-ghost text-3xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
                </button>
            </div>
            {/* Horizontal menu for xl+ screens */}
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal px-4 text-lg lg:text-2xl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tentang">Tentang Kami</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            {/* Dropdown menu for sm, md, lg (all except xl horizontal) */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-base-100 shadow-md lg:hidden animate-fade-in z-50">
                    <ul className="menu menu-vertical text-lg divide-y">
                        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>


                        <li><Link to="/tentang" onClick={() => setOpen(false)}>Tentang Kami</Link></li>


                        <li><Link to="/menu" onClick={() => setOpen(false)}>Menu</Link></li>

                        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;

