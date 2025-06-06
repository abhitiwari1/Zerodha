export default function Team() {
    return (
        <div className="container" style={{width: "77%", margin: "auto"}}>
            <h2 style={{textAlign: "center", lineHeight: "2", fontSize: "2rem"}}>People</h2>
            <div className="row" style={{lineHeight: "1.5", fontSize: "16px"}}>
                <div className="col-5 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="" style={{borderRadius: "100%", width: "70%", marginLeft: "140px"}}/>
                    <h5 style={{marginLeft: "150px", marginTop: "20px"}}>Nithin Kamath</h5>
                    <p style={{marginLeft: "150px", marginTop: "20px"}}>Founder, CEO</p>
                </div>
                <div className="col-7 p-5" style={{fontSize: "1.1rem", lineHeight: "1.8rem", marginBottom: "15px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br />hurdles he faced during his decade long stint as a trader. Today, <br />Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee <br />(SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> / <a href="" className="text-decoration-none">Twitter</a></p>
                </div>
            </div>
        </div>
    );
}