import Navbar from "../Navbar";
import AccountAndServices from "./AccountAndServices";
import Brokerage from "./Brokerage";
import Charges from "./Charges";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "../Footer"

export default function PricingPage() {
    return(
        <>
            <Navbar />
            <Header />
            <Hero />
            <Brokerage />
            <Charges/>
            <AccountAndServices/>
            <Footer />
        </>
    );
}