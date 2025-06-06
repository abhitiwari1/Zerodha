export default function Universe(){
    return(
        <div className="container" style={{width: "70%", margin: "auto", marginBottom: "100px"}}>
           <h1 className="text-center">The Zerodha Universe</h1>
           <p className="mt-4 text-center" style={{fontSize: "18px"}}>Extend your trading and investment experience even further with our partner platforms</p>
           <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="brand-card">
                            <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" style={{width: "70%"}}/>
                            <br />
                            <br />
                            <p className="brand-desc">Our asset management venture <br />that is creating simple and transparent index <br />funds to help you save for your goals.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="brand-card">
                            <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={{width: "100%"}}/>
                            <br />
                            <br />
                            <p className="brand-desc">Options trading platform that lets you <br />create strategies, analyze positions, and <br />examine data points like open interest, FI/DII, and more.</p>
                        </div>
                    </div>

                   
                    <div className="col-md-4">
                        <div className="brand-card">
                            <img src="media/images/tijori.svg" alt="Tijori" style={{width: "50%"}}/>
                            <br />
                            <br />
                            <p className="brand-desc">Investment research platform <br />that offers detailed insights on stocks <br />, sectors, supply chains, and more.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="brand-card">
                            <img src="media/images/streakLogo.png" alt="Streak" style={{width: "55%"}}/>
                            <br />
                            <br />
                            <p className="brand-desc">Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="brand-card">
                            <img src="media/images/smallcaseLogo.png" alt="Smallcase" style={{width: "70%"}}/>
                            <br />
                            <br />
                            <p className="brand-desc">Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="brand-card">
                            <img src="media/images/dittoLogo.png" alt="Ditto" style={{width: "50%"}}/>
                            <br /><br />
                            <p className="brand-desc">Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button className="btn btn-primary text-center p-2" style={{fontSize: "20px", fontWeight: "500", width: "250px"}}>Sign up for free</button>
            </div>
        </div>
    );
}