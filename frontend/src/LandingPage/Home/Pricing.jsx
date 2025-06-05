export default function Pricing() {
    return(
        <div className="container mt-5 p-5 mb-5">
            <div className="row">
                <div className="col-4">
                    <h2>Unbeatable pricing</h2>
                    <p className="mt-4 text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                    <a href="" style={{textDecoration: "none"}}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-4 border">
                            <h1>₹0</h1>
                            <p>Free equity delivery and <br />direct mutual funds</p>
                        </div>
                        <div className="col p-4 border">
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}