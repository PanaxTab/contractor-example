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