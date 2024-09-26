import React from 'react'
import { ServicePageContent } from '../modules/ServicePageContent'

export default function GeneralContracting(){
  return (
    <ServicePageContent
        {...data}
    />
  )
}

const data={
    title:"GENERAL CONTRACTING",
    subtitle:"We perform the function of a general contractor, we are responsible for overseeing and managing all aspects of the construction process. This includes coordinating with subcontractors, ensuring compliance with safety regulations, obtaining necessary permits, managing the project timeline, and ensuring that the work is completed on time and within budget.",
    image:"/hero.jpg",
    description:(
        <>
            The company's list of completged programs includes objects of various purposes: from the construction and restoration of ancient manors and churches to modern architecture residential buildings,commercial industrial buildings
            <br/>
            <br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, expedita tempora! Sapiente, facere provident ex illum quibusdam perspiciatis repellat quis excepturi culpa fugiat aperiam consequatur velit. Vitae laudantium ut a possimus voluptas!
        </>
    )
}