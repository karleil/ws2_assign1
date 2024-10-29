import React from "react";


function Header () {
    return (
     <header className="bg-black">
        <nav className="flex justify-between items-center  w-[80%] mx-auto py-4">
                <h1 className="text-4xl text-white">Logo</h1>
            <div className="flex item-center">
                 <li><a className="text-white hover:text-yellow-500 px-4 invisible lg:visible" href="#">Home</a></li>
                 <li><a className="text-white hover:text-yellow-500 px-4 invisible lg:visible" href="#">Services</a></li>
                 <li><a className="text-white hover:text-yellow-500 px-4 invisible lg:visible" href="#">About</a></li>
                 <li><a className="text-white hover:text-yellow-500 px-4 invisible lg:visible" href="#">Contact</a></li>
            </div>
            <div > 
                <button className="font-semibold bg-yellow-500 hover:bg-white px-4 py-1 rounded-lg  text-black hover:text-yellow-500 invisible md:visible lg:visible">Sign In</button>
            </div>
        </nav>
    </header>
    );
};

export default Header;