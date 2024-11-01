import React, { useState } from "react"; // Imports React and the useState hook for managing component state
import Guitar from "./Guitar.jsx"; // Imports the Guitar component to render each individual guitar item
import guitarsData from "../guitars.json"; // Imports guitar data from our external JSON file guitars.json

function Products() { 
  const [guitar, setGuitars] = useState(guitarsData); // Initializes guitar state with data from guitarsData
  const [favs, setFavs] = useState([]); // Initializes favs state to keep track of favorite guitar IDs

  // This function is needed to handle adding and removing a guitar from favorites
  const handleFavClick = (guitarID) => {
    if (favs.includes(guitarID)) { // If else statement to seeif the guitar ID is already in favorites
      const newFavs = favs.filter((singleFav) => guitarID !== singleFav); // If so, filter it out of favs
      setFavs(newFavs); // Updates favorites state without the removed ID
    } else {
      setFavs([...favs, guitarID]); // If not in favorites, add the guitar ID to favs
    }
  };

  return (
    <div className="flex flex-col items-center"> 
      <h1 className="text-4xl font-bold text-center text-black mb-8">Products</h1> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"> 
        {guitar.map((singleGuitar) => ( // Map over guitar array to render each item
          <Guitar
            key={singleGuitar.id} // Unique key for each guitar item
            guitar={singleGuitar} // Passes guitar data to the Guitar component as a prop
            favourites={favs} // Passes the favorites array to check if this guitar is a favorite
            handleFavClick={handleFavClick} // Passes the handleFavClick function to manage favorites
          />
        ))}
      </div>
    </div>
  );
}

export default Products; // Exports the Products component to be used in other pages
