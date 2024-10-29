import React, {useState} from "react";
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
        productImage: "./public/img1.jpg"
    },
    {
        id: 2,
        title: "Epiphone",
        price: "1,299.99",
        productImage: "./public/img2.jpg"
    },
    {
        id: 3,
        title: "Gretsch",
        price: "1,299.99",
        productImage: "./public/img3.jpg"
    },
    {
        id: 4,
        title: "Ibanez",
        price: "1,299.99",
        productImage: "./public/img4.jpg"
    },
    {
        id: 5,
        title: "Fender",
        price: "1,299.99",
        productImage: "./public/img5.jpg"
    },
    {
        id: 6,
        title: "Fender 2",
        price: "1,299.99",
        productImage: "./public/img6.jpg"
    }
];


function Products () {

    const [guitar, setGuitars] = useState(DEFAULT_GUITARS);
    const [favs, setFavs] = useState ([]);


const handleFavClick = (guitarID) => {
  //if this is false, add the id into favs. If not, remove it
  if(favs.includes(guitarID)){

    const newFavs = favs.filter( (singleFav) => {
      return guitarID !== singleFav;
    });

    setFavs(newFavs);

  } else {

    setFavs([...favs, guitarID]);

  }
}

return (
    <div className="mx-64">
    <h1 className="text-4xl font-bold text-center text-black mb-8">Products</h1>
        <div className="flex flex-wrap">
            {guitar.map((singleRecord) => {
                return (
                    <Guitar key={singleRecord.id} guitar={singleRecord} favourites={favs} handleFavClick={handleFavClick}/>
                )
            })} 
        </div>
    </div>
  )



    // return (
    //     <>
    //     <div>
    //         <h1 className="font-bold text-4xl text-center">PRODUCTS</h1>
    //         <div className="flex items-center justify-center container mx-auto">
    //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


    //                 <div className="bg-gray-300 rounded-xl shadow-lg">
    //                     <div className="p-5 flex-col">
    //                         <div className="rounded-xl overflow-hidden">
    //                              <img src="./public/img1.jpg" alt="guitar picture" />
    //                         </div>
    //                         <h4 className="text-2xl md:text-3xl font-medium mt-3">Gibson Les Paul</h4>
    //                         <p className="text-2xl">$1,299.99</p>
    //                     </div>
    //                 </div>
                
    //             </div>
    //         </div>
    //     </div>
    //     </>
    // )
}

export default Products;