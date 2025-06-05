export default function Varsity(){
    return(
        <div className="container" style={{width: "70%", margin: "auto", marginBottom: "100px"}}>
           <div className="row" style={{marginTop: "50px"}}>
                <div className="col-5 mt-5">
                    <img src="media/images/varsity-products.png" alt="" style={{marginLeft: "80px"}}/>
                </div>
                <div className="col-3"></div>
                <div className="col-4" style={{marginTop: "180px"}}>
                    <h2 className="mb-4">Varsity mobile</h2>
                    <p style={{fontSize: "16px"}}>An easy to grasp, collection of stock market <br />lessons with in-depth coverage and <br />illustrations. Content is broken down into bite- <br />size cards to help you learn on the go.</p>
                    <div className="row">
                        <div className="col-6">
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="mt-4"/>
                        </div>
                        <div className="col-6">
                            <img src="media/images/appstoreBadge.svg" alt="App Store" className="mt-4"/>
                        </div>
                    </div>
                </div>
                <p className="text-center" style={{marginTop: "100px", fontSize: "22px"}}>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration: "none"}}>Zerodha.tech</a> blog.</p>
           </div>
        </div>
    );
}