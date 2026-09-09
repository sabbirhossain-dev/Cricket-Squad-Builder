import { GiTwoCoins } from "react-icons/gi";

import logo from '../../public/assets/logo.png'

const Navbar = () => {
    return (
        <div className=" sticky top-0 z-10 bg-white border-b border-gray-200">
            <nav className="container mx-auto py-3 flex justify-between gap-5 items-center">
                <div className="img">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="flex gap-10 items-center">
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                    <button className="btn btn-soft btn-accent"><GiTwoCoins /> Coins</button>

                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

