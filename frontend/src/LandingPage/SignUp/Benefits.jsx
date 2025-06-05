// import "./LandingPage/Benefits.css";
export default function Benefits(){
    return(
        <div className="container  mb-5" style={{marginLeft: "300px", marginRight: "150px", marginTop: "200px"}}>
            <div className="row">
                <div className="col-6">
                    <img src="media/images/benefits.svg" alt="Benefits" style={{width: "55%"}}/>
                    <h2 className="text-muted" style={{marginLeft: "-80px", fontWeight: "500", marginTop: "30px"}}>Benefits of opening a Zerodha <br />demat account</h2>
                </div>
                <div className="col-6" style={{marginTop: "-100px", marginLeft: "-150px"}}>
                    <h4 className="text-muted">Unbeatable pricing</h4>
                    <p className="mt-4 mb-5 text-muted" style={{fontSize: "17px"}}>Zero charges for equity & mutual fund investments. Flat ₹20 fees for <br />intraday and F&O trades.</p>
                    <h4 className="text-muted">Best investing experience</h4>
                    <p className="mt-4 mb-5 text-muted" style={{fontSize: "17px"}}>Simple and intuitive trading platform with an easy-to-understand user <br />interface.</p>
                    <h4 className="text-muted">No spam or gimmicks</h4>
                    <p className="mt-4 mb-5 text-muted" style={{fontSize: "17px"}}>Committed to transparency — no gimmicks, spam, "gamification", or <br />intrusive push notifications.</p>
                    <h4 className="text-muted">The Zerodha universe</h4>
                    <p className="mt-4 mb-5 text-muted" style={{fontSize: "17px"}}>More than just an app — gain free access to the entire ecosystem of <br />our partner products.</p>
                </div>
            </div>
        </div>
    );
}