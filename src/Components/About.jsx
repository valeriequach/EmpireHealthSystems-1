import React from "react";

function About(){
    return(
        <div className="flex flex-col">
                <div className="relative w-screen h-[90vh] md:h-[95vh]">
                    <div className="absolute text-center w-screen h-[90vh] md:h-[95vh] flex flex-col justify-center items-center px-16 py-8 z-30 text-white font-Poppins font-bold">
                    <h2 className="text-2xl md:text-3xl py-4 w-5/12 border-b-2 border-white">Our Mission</h2>
                    <span className="px-4 md:px-24 pt-4 pb-8">We are committed to <span className=" text-empireyellow">improving the quality of life</span> of our homebound patients by utilizing a comprehensive approach and by making ourselves available whenever they need our services. With the use of <span className=" text-empireyellow">innovative technology</span>, we strive to enable our patients and health professionals to have constant communication and consultation.</span>
                    <h2 className="text-2xl md:text-3xl py-4 w-5/12 border-b-2 border-white">Our Vision</h2>
                    <span className="px-4 md:px-24 py-4">We aim to be the <span className=" text-empireyellow">premier medical practice group</span> that will pioneer advancement in health care. Using the <span className=" text-empireyellow">latest trends</span> available in technology we can help our patients receive the health care that they deserve.</span>
                    </div>
                    <div className="absolute w-screen h-[90vh] md:h-[95vh] bg-[#205ebf] opacity-80 z-10"></div>
                    <img 
                        src="/assets/wheelchair.jpg" 
                        alt="man in wheelchair recieves help" 
                        className="w-screen h-[90vh] md:h-[95vh] object-cover object-center" />
                </div>
                <div className="w-screen h-auto">
                    <div className="w-screen h-auto flex flex-col px-6 md:px-12 lg:px-32 pb-4">
                        <div className="w-auto h-auto flex justify-center items-center">
                        <h1 className=" w-auto text-3xl text-empireblue-dark py-4 underline">Meet Our Professionals</h1>
                        </div>
                        <div 
                            className=" w-auto h-auto flex flex-col 
                                        md:flex-row-reverse justify-start items-center p-4 pb-2 md:p-8
                                        font-Poppins gap-4 shadow-2xl rounded-sm">
                            <div className="flex flex-col w-auto h-auto justify-center items-center md:w-1/3 gap-4">
                                <img 
                                    src="/assets/Valle img.jpeg" 
                                    alt="Dr. Valle Headshot"
                                    className="w-24 h-24 rounded-full shadow-xl"/>
                                <center className="font-bold text-2xl flex">
                                    Dr. Herminigildo V. Valle, MD, MPA
                                </center>
                            </div>
                            <span className=" flex-grow md:w-2/3">
                            Dr. Herminigildo V. Valle, MD, MPA, is a distinguished physician and board-certified diplomate of 
                            the American Board of Internal Medicine since 1990. His multifaceted career spans over three decades 
                            and crosses numerous disciplines in the medical field.<br></br><br></br>
                            Dr. Valle's experience is marked by significant roles such as a Consultant at the San Francisco Center 
                            for Advanced Wound Care Center and a Hospitalist at esteemed institutions including Seton Medical Center 
                            and Veterans Administration Medical Center. Demonstrating a unique blend of medical and leadership skills, 
                            he served as Undersecretary of the Department of Health in the Philippines and Chief of Staff at AHMC Seton 
                            Medical Center. His service as Chief Flight Surgeon for the US Air Force Reserve further illuminates his versatility.<br></br><br></br>
                            An integral part of his journey has been his extensive experience in academic medicine. As an Assistant Clinical 
                            Professor of Medicine at the University of California, San Francisco, he effectively balanced his commitment to teaching with his clinical practice.<br></br><br></br>
                            His robust educational background includes a Master’s Degree in Public Administration and Health Services, a residency 
                            in Internal Medicine, and a fellowship in Vascular Medicine. His academic journey culminated in graduating Cum Laude 
                            from the Far Eastern University, Institute of Medicine.<br></br><br></br>
                            A published author and presenter on various medical topics, Dr. Valle holds numerous other certifications and affiliations. 
                            </span>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default About