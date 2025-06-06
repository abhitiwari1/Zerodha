import Navbar from "../Navbar";
import SignUp from "./SignUp";
import Investment from "./Investment";
import DematAccount from "./DematAccount";
import Benefits from "./Benefits";
import Account from "./Account";
import FAQ from "./FAQ";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

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