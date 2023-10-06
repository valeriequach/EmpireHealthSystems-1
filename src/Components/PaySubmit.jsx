import React from "react";
import { Link } from "react-router-dom";

export default function PaySubmit(){
    return(
        <div className="w-screen h-screen p-10">
            <h1 className="text-3xl font-Poppins font-bold text-empireblue-dark pb-4">Pay Submitted.</h1>
            <Link to={"/"}>
            <h2 className="text-lg font-Poppins text-empireblue hover:underline">Return to Home</h2>
            </Link>
        </div>
    )
}

