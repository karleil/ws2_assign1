import React from "react";

function Header () {
return(
    <>
        <img src="./banner2.jpg" alt="banner picture"  className="brightness-50 w-vw absolute" />
    <div className="relative text-white text-center mt-52 mb-52">
        <h1 className="text-8xl font-bold ">Your Sound, Your Style, <br/> Your Guitar.</h1>
    <button className="relative font-semibold text-lg px-3 py-1.5 rounded-2xl text-white my-8 border-solid border-2 border-yellow-500">Explore Products</button>
    </div>
    </>
);
}

export default Header;


