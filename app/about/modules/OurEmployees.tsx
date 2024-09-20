import Image from "next/image"
import { SectionName } from '@/components/SectionName';
import React from 'react'
import { Card } from "../component/Card";

export const OurEmployees = () => {
  return (
    <div>
        <SectionName name="our employees" id="our-employees"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {persons.map((person) =>(
                <div key={person.name}>
                    <Card {...person}/>
                </div>
            ))}
        </div>
    </div>
  );
};


const persons = [
    {
        image:"/person1.jpg",
        name:"Alice Smith",
        position:"Marketing Manager",
    },
    {
        image:"/person2.jpg",
        name:"Bob Johnson",
        position:"Sales Manager",
    },
    {
        image:"/person3.jpg",
        name:"Charlie Brown",
        position:"Operations Manager",
    },
    {
        image:"/person4.jpg",
        name:"Daisy Lee",
        position:"HR Manager",
    },
];