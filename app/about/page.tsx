import {OurEmployees} from "./modules/OurEmployees";
import { Banner } from "@/modules/Banner";
import { SectionSplit } from '../../components/SectionSplit';
import { Container } from '../../components/Container';
import { CompanyHistory } from './modules/CompanyHistory';
import { OurManagement } from "./modules/OurManagement";
import { OurVision } from "./modules/OurVision";
import { Certificates } from "./modules/Certificates";
import Link from "next/link";
export default function About(){
    return(
    <>
        <Banner />

        <SectionSplit>
            <Container>
                <h1 className="mb-8">ABOUT US</h1>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap -4  md:gap-8 relative min-h-screen">
                    <div className="space-y-8">
                        <CompanyHistory />
                        <OurEmployees />
                        <OurManagement/>
                        <OurVision/>
                        <Certificates/>
                    </div>
                    <div className="relative">
                        <div className="sticky top-16">
                            <ul className="hidden md:block space-y-2">
                                {links.map((link,i)=>(
                                    <li className="flex items-center gap-2" key={link.text}>
                                        <span className="w-8 h-1 bg-primary"/>
                                        <Link href={link.href} className="underline">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
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