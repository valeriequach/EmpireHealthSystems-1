import React from "react";



function ServiceCard({title, desc, imgUrl}) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto bg-white rounded-3xl shadow-xl py-8">
            <div className="container px-3 py-3 text-empireblue">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-Poppins font-bold pl-4 text-empireblue-dark">{title}</h1>
            <p className="w-auto font-Poppins pt-3 pb-6 px-4">{desc}</p>
            </div>
        </div>
    )
}

export default ServiceCard