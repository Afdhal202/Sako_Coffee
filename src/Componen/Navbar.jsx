function Navbar() {

    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-5xl">☕ Sako Coffee</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-4 text-2xl">
                    <li><a>Home</a></li>
                    <li><a>Tentang Kami</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

