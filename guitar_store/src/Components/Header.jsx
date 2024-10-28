import React from "react";


const Header = () => {
    return (
     <header className="bg-black">
        <nav className="flex justify-between items-center  w-[80%] mx-auto py-4">
                <h1 className="text-4xl text-white">Logo</h1>
            <div className="flex item-center">
                 <li><a className="text-white px-4" href="#">Home</a></li>
                 <li><a className="text-white px-4" href="#">Services</a></li>
                 <li><a className="text-white px-4" href="#">About</a></li>
                 <li><a className="text-white px-4" href="#">Contact</a></li>
            </div>
            <div>
                <button className="font-semibold bg-yellow-500 px-4 py-1 rounded-lg  text-black">Sign In</button>
            </div>
        </nav>
    </header>
    );
};

export default Header;