export default function Coin(){
    return(
        <div className="container" style={{width: "70%", margin: "auto"}}>
           <div className="row" >
                <div className="col-5 mt-5">
                    <img src="media/images/products-coin.png" alt=""/>
                </div>
                <div className="col-3"></div>
                <div className="col-4" style={{marginTop: "100px"}}>
                    <h2 className="mb-4">Coin</h2>
                    <p style={{fontSize: "16px"}}>Buy direct mutual funds online, commission- <br />free, delivered directly to your Demat <br />account. Enjoy the investment experience <br />on your Android and iOS devices.</p>
                    <a href="" style={{textDecoration: "none"}}>Coin <i className="fa-solid fa-arrow-right"></i></a>
                    <div className="row">
                        <div className="col-6">
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="mt-4"/>
                        </div>
                        <div className="col-6">
                            <img src="media/images/appstoreBadge.svg" alt="App Store" className="mt-4"/>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}