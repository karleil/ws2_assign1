import React from "react";

function Products () {
    return (
        <>
        <div>
            <h1 className="font-bold text-4xl text-center">PRODUCTS</h1>
            <div className="flex items-center justify-center min-h-screen container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                    <div className="rounded-xl shadow-lg">
                        <div className="p-5 flex-col">
                            <div className="rounded-xl overflow-hidden">
                                 <img src="./public/img1.jpg" alt="guitar picture" />
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Products;