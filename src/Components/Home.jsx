import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="w-screen h-[90vh] md:h-[95vh]">
            <div className="w-screen h-[90vh] md:h-[95vh] absolute flex flex-col justify-center items-center z-20">
                <span className="text-center text-3xl md:text-5xl font-Poppins font-bold text-white pb-6">Building the Future of Health Care</span>
                <a href="https://empirehsi.com/intake/">
                <button className="text-white bg-[#2d66bc] opacity-80 hover:bg-empireblue hover:opacity-100 rounded-md px-8 py-3">
                    SCHEDULE YOUR APPOINTMENT
                </button>
                </a>
            </div>
            <div className=" w-screen h-[90vh] md:h-[95vh] lg:h-screen absolute bg-empiregray opacity-50 z-10"></div>
            <img 
                className="w-screen h-[90vh] md:h-[95vh] lg:h-screen object-cover overflow-auto md:overflow-hidden"
                src="/assets/1.jpg" 
                alt="Hospice and Home Health"
            />
        </div>
        <div className="w-screen h-[80vh] sm:h-[120vh] lg:h-[80vh] bg-white">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
                <div className="w-full lg:w-1/2 font-Poppins p-8 md:pt-10 lg:pt-4 h-3/5 text-[#3d3d3d]">
                    <h2 className="font-bold text-xl">Welcome To</h2>
                    <h1 className="font-bold text-4xl pb-4">Empire Health Systems</h1>
                    <h5 className="">Are you a caregiver for a loved one who has an illness or disability? 
                        Do they have access to medical care whenever they need them? If they don’t, 
                        then you have come to the right place. We provide mobile medical services that 
                        are always available for your loved ones when they are in need.</h5>
                        <Link to={"/About-Us"}>
                        <button className="text-white bg-[#2d66bc] opacity-80 hover:bg-empireblue hover:opacity-100 rounded-md px-8 py-3 mt-12">
                            LEARN MORE
                            </button>
                        </Link>
                </div>
                <div className=" container w-11/12 lg:w-1/2 h-full object-contain pb-16 lg:pb-0 lg:flex lg:justify-center lg:items-center">
                    <img src="/assets/happy-patient.jpg" alt="happy patient" className="lg:pt-8 lg:px-20"/>
                </div>
            </div>
        </div>
        <div className="w-screen h-[90vh] md:h-[95vh]">
        <div className="w-screen h-[90vh] md:h-[95vh] absolute flex flex-col justify-center items-center z-20">
            <span className="text-white font-Poppins font-bold text-5xl">Our Services</span>
            <Link to={"/Services"}>
            <button className="text-white bg-[#2d66bc] opacity-80 hover:bg-empireblue hover:opacity-100 rounded-md px-8 py-3 mt-12">
                View Our Services
            </button>
            </Link>
        </div>
        <div className=" w-screen h-[90vh] md:h-[95vh] absolute bg-empiregray opacity-50 z-10">
        </div>
            <img src="/assets/stethoscope.jpg" alt="stethoscope" className="w-screen h-[90vh] md:h-[95vh] lg:h-screen object-cover overflow-auto md:overflow-hidden -z-20" />
        </div>
        </>
    )
}

export default Home