import React, { useState } from "react";
import Guitar from "./Guitar.jsx";
import guitarsData from "../guitars.json"; 

function Products() {
  const [guitar, setGuitars] = useState(guitarsData); 
  const [favs, setFavs] = useState([]); 

  
  const handleFavClick = (guitarID) => {
    if (favs.includes(guitarID)) {
      const newFavs = favs.filter((singleFav) => guitarID !== singleFav);
      setFavs(newFavs); 
    } else {
      setFavs([...favs, guitarID]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-black mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {guitar.map((singleGuitar) => (
          <Guitar
            key={singleGuitar.id} 
            guitar={singleGuitar} 
            favourites={favs} 
            handleFavClick={handleFavClick} 
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
