import React from "react"
import services from "../data/services"
import ServiceCard from "./ServiceCard"

function Services(){
    return(
        <div className="flex flex-col">
            <div className="w-screen h-auto flex justify-center py-4 shadow-md">
                <h1 className="text-empireblue text-3xl md:text-4xl lg:text-5xl font-bold">
                   Services We Offer
                </h1>
            </div>
        <div className="flex flex-col gap-3 px-4 py-6 md:px-12 md:py-8 bg-empiregray bg-opacity-5">
            {services.map(services => (
          <ServiceCard
            title={services.title}
            desc={services.desc}
            imgUrl={services.imgUrl}
            bb5b={services.bb5b}
          />
        ))}
        </div>
        </div>
    )
}

export default Services