
import EmblaCarousel from '@/components/Carousel/EmblaCarousel'
import { Container } from '@/components/Container'
import { Project } from 'next/dist/build/swc';
import Image from 'next/image';
import { title } from 'process'
import React from 'react'
import { LabelWithIconColor } from '../components/LabelWithIconColor';

interface ProjectSingleProps{
    title:string,
    images:string[],
    description:string | string[],
    location:string,
    year:number
}

export const ProjectSingle = ({title,images,description,location,year}:ProjectSingleProps) => {
  return (
    <section>
        <Container>
            <h3 className="mb-4">
                {title}
            </h3>
            <EmblaCarousel slides={images} isControlsVisible={false}/>

            <div className="grid.grid-cols-1.md:grid-cols-[0.8fr_0_2fr].gap-4.md:gap-8.mt-4">
                <p>{description}</p>
            </div>
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-2">
                <LabelWithIconColor 
                    image="/location.png" 
                    alt="location" 
                    text={location}
                />
                <LabelWithIconColor 
                    image="/calendar.png" 
                    alt="calendar" 
                    text={year}
                />
            </div>
        </Container>
    </section>
  )
}
