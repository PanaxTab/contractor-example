import { Banner } from "@/modules/Banner";
import { ContactUs } from "@/modules/ContactForm/ContactUs";
import { Map } from "@/components/Map";

const position: [number, number] = [34.710203, 33.127101];

export default function Contact(){
    return(
    <>
        <Banner />
        <ContactUs/>
        <Map longitude={position[0]} latitude={position[1]}/>
    </>
    )
}