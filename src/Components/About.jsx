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
            <h1 className="text-3xl font-bold text-empireblue-dark py-4">Meet Our Professionals</h1>
            <span>With us, you can be assured that our professionals are not only knowledgeable and accessible, they are also friendly and caring. They are also open to clarify information about our patients’ health and medications and are very responsive to their needs. With their help, our clients will not only have access to excellent services, but their families and caregivers can also be relieved of their loved ones’ worries regarding their health.<br></br><br></br>

Benefits of Availing of Our Mobile Medical Services:<br></br><br></br>

Schedule appointments quickly and easily.<br></br>
Avoid getting stuck in traffic while driving to doctor’s appointments.<br></br>
No lengthy medical forms to fill out.<br></br>
Have treatment in the convenience of your home.<br></br>
Avoid getting exposed to communicable disease.<br></br>
For more information about us, please send us a message or reach us through our contact details.</span>
            </div>
            <div className="w-full h-auto bg-gray-700 flex flex-row p-8">
            <div className="text-white font-Poppins flex flex-col flex-grow justify-center items-center">
            <h1 className=" font-bold text-lg">Phone Number</h1>
            <h2 className="font-thin text-md">+1 (213) 440-2707</h2>
            </div>
            <div className="text-white font-Poppins flex flex-col flex-grow justify-center items-center">
            <h1 className=" font-bold text-lg">E-mail Address</h1>
            <h2 className="font-thin text-mb">ramirezpeter@empirehsi.com</h2>
            </div>
        </div>
            </div>
        </div>
    )
}

export default About