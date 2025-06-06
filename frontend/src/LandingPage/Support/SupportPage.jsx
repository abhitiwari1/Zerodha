import Hero from "./Hero";
import Navbar from "../Navbar";
import CreateTicket from "./CreateTicket";
import SupportFooter from "./SupportFooter"

export default function SupportPage() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <CreateTicket/>
            <SupportFooter/>
        </>
    );
}