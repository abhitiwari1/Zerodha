export default function Hero() {
    return (
        <div classNameName="header" style={{backgroundColor: "#387ed1", color: "white"}}>
            <div className="container py-5" style={{width: "75%", margin: "auto"}}>
                <div className="row">
                    <div className="col-md-7">
                        <h3 className="mb-5" style={{fontSize: "22px"}}>Support Portal</h3>
                        <p style={{fontSize: "23px"}}>Search for an answer or browse help topics to create a <br />ticket</p>

                        <div className="search-box mt-4 mb-3">
                        <input type="text" placeholder="Eg: how do I activate F&O, why is my order getting rejected … "/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div className="link-list mt-4">
                        <a href="#">Track account opening</a>
                        <a href="#">Track segment activation</a>
                        <a href="#">Intraday margins</a>
                        <div className="mt-2">
                            <a href="#">Kite user manual</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="link-list d-flex justify-content-end mb-5">
                        <a href="#" >Track tickets</a>
                        </div>
                        <div className="featured">
                        <h5>Featured</h5>
                        <ol className="mt-3">
                            <li><a href="#">Current Takeovers and Delisting - June 2025</a></li>
                            <li><a href="#">Surveillance measure on scrips - June 2025</a></li>
                        </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}