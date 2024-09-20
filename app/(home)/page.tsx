import { Hero } from "./modules/Hero";
import { CoreValues } from "./modules/CoreValues";
import { AboutUS } from './modules/AboutUS';
import { SectionSplit } from '../../components/SectionSplit';
import { Services } from "@/modules/Services";
import { Projects } from '../../modules/Projects';
import { Career } from './modules/Career';
import { ContactUs } from '../../modules/ContactForm/ContactUs';
export default function Home() {
  return(
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUS />
        <Services/>
        <Projects/>
        <Career/>
      </SectionSplit>
      <ContactUs/>
    </>
  ) ;
}
