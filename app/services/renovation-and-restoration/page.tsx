import React from 'react'
import { ServicePageContent } from '../modules/ServicePageContent'

export default function RenovationAndRestoration(){
  return (
    <ServicePageContent
        {...data}
    />
  )
}

const data={
    title:"RENOVATION AND RESTORATION",
    subtitle:"We offer services for renovation and restoration of residential, commercial, and historical properties. Our expertise includes everything from modernizing interiors, upgrading electrical and plumbing systems, and improving energy efficiency, to restoring original architectural features and preserving the historical integrity of older buildings. ",
    image:"/hero2.jpg",
    description:(
        <>
            We specialize in a wide range of renovation and restoration projects, with a particular expertise in preserving the integrity and charm of historical buildings. Our services encompass everything from modern home upgrades to meticulous historical renovations, where we carefully restore architectural features while enhancing the functionality of the space. Whether you're looking to refresh a contemporary property or bring a historic structure back to its former glory, our skilled team ensures quality craftsmanship and attention to detail in every project.
            <br/>
            <br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, expedita tempora! Sapiente, facere provident ex illum quibusdam perspiciatis repellat quis excepturi culpa fugiat aperiam consequatur velit. Vitae laudantium ut a possimus voluptas!
        </>
    )
}