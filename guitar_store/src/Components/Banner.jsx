import React from "react";

function Header () {
return(
    <>
        <img src="./banner2.jpg" alt="banner picture"  className="brightness-50 sm:h-96 lg:h-auto lg:w-vw absolute" />
    <div className="relative text-white text-center mt-4 md:mt-24 lg:mt-52 md:mb-24 lg:mb-52">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold ">Your Sound, Your Style, <br/> Your Guitar.</h1>
    <button className="relative font-semibold text-lg px-3 py-1.5 rounded-2xl hover:bg-white text-white hover:text-yellow-500 my-8 border-solid border-2 border-yellow-500 hover:border-white">Explore Products</button>
    </div>
    </>
);
}

export default Header;


