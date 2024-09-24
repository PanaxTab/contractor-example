import { Banner } from "@/modules/Banner";
import { SectionSplit } from '../../components/SectionSplit';
import { Container } from '../../components/Container';
import Link from "next/link";
import {Achievements} from "./modules/Achievements";
import {Services as ServicesSection} from"@/modules/Services"
import { Projects } from "@/modules/Projects";
export default function Services(){
    return(
    <>
        <Banner />
        <SectionSplit>
            <Achievements/>
            <ServicesSection/>
            <Projects/>
        </SectionSplit>
    </>
    )
}

const links = 
[
    {
        href:"#company-history",
        text:"Company history"
    },
    {
        href:"#our-employees",
        text:"Employees"
    },
    {
        href:"#our-management",
        text:"Management"
    },
    {
        href:"#our-vision",
        text:"Vision"
    },
    {
        href:"#certificates",
        text:"Certificates"
    }
]