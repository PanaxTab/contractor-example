import {Container} from "@/components/Container"
import EmblaCarousel from "@/components/Carousel/EmblaCarousel"
import { SectionName } from "@/components/SectionName"
import React from "react"



const data=[
  {
    image:"/hero.jpg",
    title:"Project 1",
    link:"/project1"
  },
  {
    image:"/hero2.jpg",
    title:"Project 2",
    link:"/project2"
  },
  {
    image:"/hero3.jpg",
    title:"Project 3",
    link:"/project3"
  },
]

export const Projects = () => {
  return (
    <section>
        <Container>
            <SectionName name="projects"/>
            <EmblaCarousel slides={data}/>
        </Container>
    </section>
  )
}
