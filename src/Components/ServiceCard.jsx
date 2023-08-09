import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ServiceCard({ title, desc, imgUrl, cardkey }) {
  const [hover, setHover] = useState(false);

  const view = {
    initial: { scale: 0 },
    animate: { scale: 1, duration: 1.8 },
    exit: {scale: 0, duration: 1.8 }
  };

    return (
        
        <div
            className="relative flex w-full h-96 shadow-xl rounded-md"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <div className="absolute w-full h-full bg-empiregray opacity-50 z-10 rounded-md"></div>
            <div className="absolute w-full h-full flex justify-center items-center 
                            font-Poppins font-bold text-center text-white text-xl md:text-2xl z-20 rounded-md">{title}</div>
            <img 
                src={imgUrl} 
                alt={desc}
                className="object-cover overflow-auto rounded-md" />
            <AnimatePresence>
            {hover &&(
                
                <motion.div 
                className="absolute flex justify-center items-center w-full h-full bg-empireblue opacity-95 shadow-xl py-8 z-30 rounded-md"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={view}
                transition={{ease: "easeInOut"}}
                key={cardkey}>
                <div className="container p-3 text-white">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-Poppins font-bold pl-4">{title}</h1>
                <p className="w-auto font-Poppins pt-3 pb-6 px-4">{desc}</p>
                </div>
            </motion.div>
            )}
            </AnimatePresence>
        </div>
        
    )
}

export default ServiceCard