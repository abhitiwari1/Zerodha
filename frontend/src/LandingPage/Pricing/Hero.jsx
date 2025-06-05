export default function Hero() {
    return (
        <div className="container py-5" style={{width: "75%", margin: "auto"}}>
            <div className="row text-center">
                <div className="col-md-4 mb-4">
                    <img src="media/images/pricing0.svg" alt="" style={{width: "70%"}}/>
                    <div className="price-title fs-3">Free equity delivery</div>
                    <p className="price-desc mt-4">All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹0 brokerage.</p>
                </div>

                <div className="col-md-4 mb-4">
                    <img src="media/images/pricing20.svg" alt="" style={{width: "70%"}}/>
                    <div className="price-title fs-3">Intraday and F&O trades</div>
                    <p className="price-desc mt-4">Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-md-4 mb-4">
                    <img src="media/images/pricingMF.svg" alt="" style={{width: "70%"}}/>
                    <div className="price-title fs-3">Free direct MF</div>
                    <p className="price-desc mt-4">All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}