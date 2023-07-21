import React from "react";

function About(){
    return(
        <div className="flex flex-col">
                <div className="w-screen h-auto flex justify-center py-4 shadow-xl">
                    <h1 className="text-empireblue text-3xl md:text-4xl lg:text-5xl font-bold">
                        About Us
                    </h1>
                </div>
                <div className="relative w-screen h-screen md:h-5/6">
                    <div className="absolute text-center w-screen h-screen md:h-5/6 flex flex-col justify-center items-center px-16 py-8 z-30 text-white font-Poppins font-bold">
                    <h2 className="text-2xl md:text-3xl py-4 w-5/12 border-b-2 border-white">Our Mission</h2>
                    <span className="px-4 md:px-24 pt-4 pb-8">We are committed to improving the quality of life of our homebound patients by utilizing a comprehensive approach and by making ourselves available whenever they need our services. With the use of innovative technology, we strive to enable our patients and health professionals to have constant communication and consultation.</span>
                    <h2 className="text-2xl md:text-3xl py-4 w-5/12 border-b-2 border-white">Our Vision</h2>
                    <span className="px-4 md:px-24 py-4">We aim to be the premier medical practice group that will pioneer advancement in health care. Using the latest trends available in technology we can help our patients receive the health care that they deserve.</span>
                    </div>
                    <div className="absolute w-screen h-full bg-[#205ebf] opacity-80 z-10"></div>
                    <div className="w-screen h-screen md:h-5/6 object-cover z-20 overflow-hidden">
                    <img 
                        src="/assets/wheelchair.jpg" 
                        alt="man in wheelchair recieves help" 
                        className="min-h-full object-cover object-center md:w-screen md:h-screen" />
                    </div>
                </div>
                <div className="w-screen h-auto">
                    <div className="px-6 md:px-12 lg:px-32 py-6 md:py-8 text-black text-sm font-Poppins">
                    <h1 className="text-3xl font-bold text-empireblue-dark py-4">Current Business Objective</h1>
                    
                        <h2 className="text-xl font-bold text-empireblue">Medical Group Practice:</h2><br></br>
                    <span>
                        <strong>1.</strong> Provides MD’s with a concierge service practice allowing them a convenient tele-consultation extension practice of their medical profession.<br></br>
                        <strong>2.</strong> Provides qualified patients a cost effective solution to their medical diagnosis, prescription and treatment regimen requirements in the comfort of their homes.<br></br>
                        <strong>3.</strong> Provides Healthcare Agencies a professional medical evaluation of their pre-patients for appropriateness checks and patient care plans, as required.<br></br>
                    </span>
                    <h1 className="text-3xl font-bold text-empireblue-dark py-4">Our Core Values</h1>
                    <span><strong>Integrity</strong> – Our patients can trust that our health professionals are licensed, have undergone proper training, and are experienced in their respective fields of work.</span><br></br><br></br>
                    <span><strong>Reliability</strong> – You can depend on us to be always available and to do our best so your loved ones can receive the health assistance that they need.</span><br></br><br></br>
                    <span><strong>Compassion</strong> – Our medical professionals understand the hardships of a person suffering from a disease or disorder. With us, you can be assured that you will be treated like a person, not just a patient.</span>                    
                    </div>
                    <div className="w-screen h-auto flex flex-col px-6 md:px-12 lg:px-32 pb-4">
                        <div className=" w-auto h-auto ">
                        <h1 className=" w-auto text-3xl font-bold text-empireblue-dark py-4">Meet Our Professionals</h1>
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
                                Dr. Herminigildo V. Valle, MD, MPA, is a distinguished medical practitioner with over three decades of experience across various disciplines. 
                                Currently an Assistant Clinical Professor of Medicine at the University of California, San Francisco, and a Consultant at the San Francisco Center for 
                                Advanced Wound Care Center, Dr. Valle expertly balances academia with clinical practice. 
                                <br></br><br></br>Dr. Valle’s past roles include Undersecretary of the Department 
                                of Health in the Philippines and Chief of Staff at AHMC Seton Medical Center. These roles, combined with his service as a Hospitalist and Chief Flight Surgeon 
                                for the US Air Force Reserve, showcase his unique blend of medical and leadership skills. 
                                <br></br><br></br>With a Master’s Degree in Public Administration and Health Services, 
                                residency in Internal Medicine, and a fellowship in Vascular Medicine, Dr. Valle’s educational background is equally robust. His remarkable academic journey culminated 
                                in graduating Cum Laude from the Far Eastern University, Institute of Medicine. 
                                <br></br><br></br>Dr. Valle is a published author and presenter in various medical topics and holds numerous 
                                licensures and certifications. He is a Diplomate of the American Board of Internal Medicine and the American Board of Wound Medicine and Surgery.
                                In summary, Dr. Valle’s vast experience, education, and dedication make him a distinguished figure in medicine, offering a wealth of knowledge and skills to his patients and students alike.
                            </span>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default About