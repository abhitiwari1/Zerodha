export default function CreateTicket() {
    return (
        <div className="container py-5" style={{width: "70%", margin: "auto"}}>
            <p style={{fontSize: "22px", color: "gray"}}>To create a ticket, select a relevant topic</p>
            <div className="row mt-5">
                <div className="col navigate">
                    <p><a href=""><i className="fa-solid fa-circle-plus"></i>Account Opening</a></p>
                    <a href="">Resident individual</a><br />
                    <a href="">Minor</a><br />
                    <a href="">Non Resident Indian (NRI)</a><br />
                    <a href="">Company, Partnership, HUF and LLP</a><br />
                    <a href="">Glossary</a><br />  
                </div>
                <div className="col navigate">
                    <p><a href="">Your Zerodha Account</a></p>
                    <a href="#">Your Profile</a><br />
                    <a href="#">Account modification</a><br />
                    <a href="#">Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href="#">Nomination</a><br />
                    <a href="#">Transfer and conversion of securities</a><br />
                </div>
                <div className="col navigate">
                    <p><a href="">Kite</a></p>
                    <a href="">IPO</a><br />
                    <a href="">Trading FAQs</a><br />
                    <a href="">Margin Trading Facility (MTF) and Margins</a><br/>
                    <a href="">Charts and orders</a><br />
                    <a href="">Alerts and Nudges</a><br />
                    <a href="">General</a><br />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col navigate">
                    <p><a href="">Funds</a></p>
                    <a href="">Add money</a><br />
                    <a href="">Withdraw money</a><br />
                    <a href="">Add bank accounts</a><br />
                    <a href="">eMandates</a><br /> 
                </div>
                <div className="col navigate">
                    <p><a href="">eMandates</a></p>
                    <a href="#">Portfolio</a><br />
                    <a href="#">Corporate actions</a><br />
                    <a href="#">Funds statement</a><br />
                    <a href="#">Reports</a><br />
                    <a href="#">Profile</a><br />
                    <a href="#">Segments</a><br />
                </div>
                <div className="col navigate">
                    <p><a href="">Coin</a></p>
                    <a href="">Mutual funds</a><br />
                    <a href="">National Pension Scheme (NPS)</a><br />
                    <a href="">Features on Coin</a><br />
                    <a href="">Payments and Orders</a><br />
                    <a href="">General</a><br />
                </div>
            </div>
        </div>
    );
}