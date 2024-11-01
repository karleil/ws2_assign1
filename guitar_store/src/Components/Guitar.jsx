import React from "react"; // Imports React to define the functional component
import IonIcon from "@reacticons/ionicons"; // Imporst IonIcon for using our heart icons ♥

// Defines the Guitar component. The guitar, favourites, and handleFavClick are the props
function Guitar({ guitar, favourites, handleFavClick }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md w-80 px-3 pt-4 mb-4 mx-auto"> 
      <img src={guitar.productImage} className="rounded-md" /> {/* Display the product image */}
      <div className="p-2"> 
        <h3 className="font-semibold">{guitar.title}</h3> {/* Displays the guitar name */}
        <p>${guitar.price}</p> {/* Display's the guitar's price */}

      
        <button className="text-red-500" onClick={() => handleFavClick(guitar.id)}>
          {favourites.includes(guitar.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
          {/* If the guitar ID is in favourites, show a filled heart; otherwise, show an outline */}
        </button>
      </div>
    </div>
  );
}

export default Guitar; // Exports the Guitar component to be used in other pages.
