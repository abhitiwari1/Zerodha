export default function Console(){
    return(
        <div className="container" style={{width: "70%", margin: "auto", marginTop: "120px"}}>
           <div className="row" >
                <div className="col-5" style={{marginTop: "200px"}}>
                    <h2>Console</h2>
                    <p className="mt-4" style={{fontSize: "17px"}}>The central dashboard for your Zerodha <br />account. Gain insights into your trades and <br />investments with in-depth reports and <br />visualisations.</p>
                    <a style={{textDecoration: "none"}} href="">Learn more <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6">
                    <img src="media/images/products-console.png" alt="Console"/>
                </div>
           </div>
        </div>
    );
}