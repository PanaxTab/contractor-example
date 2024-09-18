import { Hero } from "./modules/Hero";
import { CoreValues } from "./modules/CoreValues";
import { AboutUS } from './modules/AboutUS';
import { SectionSplit } from '../../components/SectionSplit';
export default function Home() {
  return(
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUS />
      </SectionSplit>  
    </>
  ) ;
}
