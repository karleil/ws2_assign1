import React from "react";
import IonIcon from "@reacticons/ionicons";

function Guitar({ guitar, favourites, handleFavClick }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md w-80 px-3 pt-4 mb-4 mx-auto">
      <img src={guitar.productImage} className="rounded-md" />
      <div className="p-2">
        <h3 className="font-semibold">{guitar.title}</h3>
        <p>${guitar.price}</p>
        <button className="text-red-500" onClick={() => handleFavClick(guitar.id)}>
          {favourites.includes(guitar.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
        </button>
      </div>
    </div>
  );
}

export default Guitar;
