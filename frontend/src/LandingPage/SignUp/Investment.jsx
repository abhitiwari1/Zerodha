export default function Investment() {
    return(
        <div className="container mt-5 p-5 mb-5">
            <h2 className="text-center">Investment options with Zerodha demat account</h2>
            <div className="row" style={{width: "80%", margin: "auto", marginTop: "100px"}}>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <img src="media/images/stocks.svg" alt="Stocks"/>
                        </div> 
                        <div className="col-1"></div> 
                        <div className="col-8">
                            <h2 className="fs-3">Stocks</h2>
                            <p className="text-muted">Invest in all exchange-listed <br />securities</p>
                        </div>
                    </div> 
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <img src="media/images/MutualFunds.svg" alt=""/>
                        </div> 
                        <div className="col-1"></div> 
                        <div className="col-8">
                            <h2 className="fs-3">Mutual funds</h2>
                            <p className="text-muted">Invest in commission-free direct <br />mutual funds</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="row" style={{marginLeft: "150px", marginRight: "150px", marginTop: "50px"}}>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <img src="media/images/IPO.svg" alt="IPO"/>
                        </div> 
                        <div className="col-1"></div> 
                        <div className="col-8">
                            <h2 className="fs-3">IPO</h2>
                            <p className="text-muted">Apply to the latest IPOs instantly <br />via UPI</p>
                        </div>
                    </div> 
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <img src="media/images/Future&Options.svg" alt="Stocks"/>
                        </div> 
                        <div className="col-1"></div> 
                        <div className="col-8">
                            <h2 className="fs-3">Futures & Options</h2>
                            <p className="text-muted">Hedge and mitigate market risk <br />through simplified F&O trading</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button className="btn btn-primary mt-5 text-center fs-4" style={{fontWeight: "500"}}>Explore Investments</button>
            </div>
        </div>
    );
}