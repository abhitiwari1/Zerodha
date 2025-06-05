export default function Kite(){
    return(
        <div className="container" style={{width: "70%", margin: "auto"}}>
           <div className="row" style={{marginTop: "50px"}}>
                <div className="col-5 mt-5">
                    <img src="media/images/products-kite.png" alt="Kite"/>
                </div>
                <div className="col-3"></div>
                <div className="col-4" style={{marginTop: "100px"}}>
                    <h1 className="mb-4">Kite</h1>
                    <p style={{fontSize: "17px"}}>Our ultra-fast flagship trading platform with <br />streaming market data, advanced charts, an <br />elegant UI, and more. Enjoy the Kite <br />experience seamlessly on your Android and <br />iOS devices.</p>
                    <div className="row">
                        <div className="col-6">
                            <a href="" style={{textDecoration: "none"}}>Try demo <i className="fa-solid fa-arrow-right"></i></a>
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="mt-4"/>
                        </div>
                        <div className="col-6">
                            <a href="" style={{textDecoration: "none"}}>Learn more <i className="fa-solid fa-arrow-right"></i></a>
                            <img src="media/images/appstoreBadge.svg" alt="App Store" className="mt-4"/>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}