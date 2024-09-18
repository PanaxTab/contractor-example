import { Hero } from "./modules/Hero";
import { CoreValues } from "./modules/CoreValues";
import { AboutUS } from './modules/AboutUS';
import { SectionSplit } from '../../components/SectionSplit';
import { Services } from "@/modules/Services";
export default function Home() {
  return(
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUS />
        <Services/>
      </SectionSplit>  
    </>
  ) ;
}
