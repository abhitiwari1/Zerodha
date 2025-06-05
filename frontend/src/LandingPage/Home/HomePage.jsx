import OpenAccount from "../OpenAccount";
import Award from "./Award";
import Education from "./Education";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Footer from "../Footer";

export default function HomePage() {
    return(
       <>
        <Navbar />
        <Hero />
        <Award /> 
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
       </>
    )
}