import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Home(){
    const navigate = useNavigate();
    const [ref, inView] = useInView({
        triggerOnce: false,  // trigger every time it enters the viewport
        threshold: 0.6,
      });
    
    const title = "What is RPM?";
    const letters = title.split("");
    const containerVariants = {
        initial: { opacity: 0, x: -50 },
        animate: {
          opacity: 1,
          x:0,
          transition: {
            ease: "easeInOut",
            staggerChildren: 0.2
          },
        },
      };
      

    const scaleAnimation = inView ? 1 : 0.7;

    const spanElements = [
        { id: 1, text: 'monitored.' },
        { id: 2, text: 'optimized.' },
        { id: 3, text: 'anytime.' },
        { id: 4, text: 'anywhere.' },
      ];
    const [currentSpan, setCurrentSpan] = useState(spanElements[0]);
    useEffect(() => {
        const interval = setInterval(() => {
          const currentIndex = spanElements.findIndex((span) => span.id === currentSpan.id);
          const nextIndex = (currentIndex + 1) % spanElements.length;
          setCurrentSpan(spanElements[nextIndex]);
        }, 2500); // 
        return () => clearInterval(interval);
        }, [currentSpan]);

    return(
        <>
        <div className="w-screen h-[90vh] md:h-[100vh] bg-[#f9f9f9]">
            <div className="w-screen h-[90vh] md:h-[100vh] absolute flex flex-col justify-center items-center z-20">
                <span className="text-center text-3xl md:text-5xl font-Poppins font-bold text-white pb-6">Your Health, Our Priority</span>
                
                <button 
                    className="text-white bg-[#2d66bc] opacity-80 hover:bg-empireblue hover:opacity-100 rounded-md px-8 py-3" onClick={() => navigate('/Intake')}>
                    SCHEDULE YOUR APPOINTMENT 
                </button>
                
            </div>
            <div className=" w-screen h-[90vh] md:h-[100vh] absolute bg-empiregray opacity-50 z-10"></div>
            <img 
                className="w-screen h-[90vh] md:h-[100vh] lg:h-screen object-cover overflow-auto md:overflow-hidden drop-shadow-xl"
                src="/assets/1.jpg" 
                alt="Hospice and Home Health"
            />
        </div>


        <div className="w-screen h-[80vh] md:h-[85vh] bg-[#f6f6f5] drop-shadow-2xl">
            <div className="flex flex-col md:flex-row w-full h-full justify-start md:justify-center items-center"ref={ref}>
            <div className="w-full md:w-2/5 h-2/5 md:h-2/5 flex flex-col gap-4 justify-center items-start font-Poppins px-6 md:p-0 md:ml-12">
            <motion.div
                className="sm:pl-2 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-2xl mt-4 sm:mt-0"
                variants={containerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
            >
                {letters.map((letter, index) => (
                    <motion.span 
                        key={index} 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }}
                        style={{display: "inline"}}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>

        <h3 className="sm:pl-4 text-md drop-shadow-xl mb-2">
                    Revolutionizing healthcare with industry leading technology. <br></br><span className="text-xl">Your Wellness,</span>
                    <AnimatePresence mode="wait">
                        <motion.span
                        key={currentSpan.id}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{ duration: 0.3 }}
                        className="text-empireyellow text-xl inline-block pl-1"
                        >
                        {currentSpan.text}
                        </motion.span>
                    </AnimatePresence>
                </h3>
                <motion.button 
                    className="text-black border-2 border-black rounded-md px-4 py-2 sm:ml-4" 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 1}}>
                    <a href="https://www.youtube.com/watch?v=D-Eeygrp6rU">
                    Learn More
                    </a>
                </motion.button>
                </div>
                <motion.div className="w-screen md:w-3/5 h-3/5 md:h-full flex justify-center items-center">
                    <motion.img 
                    src="/assets/instruments.png" 
                    alt="RPM instruments" 
                    className="w-96 md:w-[30rem] lg:w-[40rem] h-auto drop-shadow-2xl pr-"
                    animate={{ scale: scaleAnimation }}
                    transition={{ duration: 5 }}
                    />
                </motion.div>
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
            <img src="/assets/stethoscope.jpg" alt="stethoscope" className="w-screen h-[90vh] md:h-[95vh] object-cover overflow-auto md:overflow-hidden -z-20" />
        </div>
        </>
    )
}

export default Home