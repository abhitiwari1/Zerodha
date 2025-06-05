import Navbar from "./LandingPage/Navbar";
import SignUp from "./SignUp";
import Investment from "./Investment";
import DematAccount from ".DematAccount";
import Benefits from "./Benefits";
import Account from "./Account";
import FAQ from "./FAQ";
import OpenAccount from "./LandingPage/OpenAccount";
import Footer from "./LandingPage/Footer";

export default function SignUpPage() {
    return (
        <>
            <Navbar />
            <SignUp />
            <Investment />
            <DematAccount />
            <Benefits/>
            <Account />
            <FAQ />
            <OpenAccount />
            <Footer />
        </>
    );
}