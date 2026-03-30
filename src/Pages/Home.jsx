import { About } from "./About";
import { HeroSection } from "../component/Layout/UI/HeroSection"
import { Services } from "./Services";
import { Contact } from "./Contact";


export const Home = () => {
    return(
        <>
         <HeroSection/>
         <About/>
         <Services/>
         <Contact/>
        </>
    )
}