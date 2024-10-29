import React, { useState } from "react";
import Guitar from "./Guitar.jsx";
import image1 from "/img1.jpg";
import image2 from "/img2.jpg";
import image3 from "/img3.jpg";
import image4 from "/img4.jpg";
import image5 from "/img5.jpg";
import image6 from "/img6.jpg";

const DEFAULT_GUITARS = [
  {
    id: 1,
    title: "Gibson Les Paul",
    price: "1,299.99",
    productImage: image1,
  },
  {
    id: 2,
    title: "Epiphone",
    price: "1,299.99",
    productImage: image2,
  },
  {
    id: 3,
    title: "Gretsch",
    price: "1,299.99",
    productImage: image3,
  },
  {
    id: 4,
    title: "Ibanez",
    price: "1,299.99",
    productImage: image4,
  },
  {
    id: 5,
    title: "Fender",
    price: "1,299.99",
    productImage: image5,
  },
  {
    id: 6,
    title: "Fender 2",
    price: "1,299.99",
    productImage: image6,
  },
];

function Products() {
  const [guitar, setGuitars] = useState(DEFAULT_GUITARS);
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
        {guitar.map((singleRecord) => (
          <Guitar
            key={singleRecord.id}
            guitar={singleRecord}
            favourites={favs}
            handleFavClick={handleFavClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
