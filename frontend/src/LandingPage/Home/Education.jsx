export default function Education() {
    return(
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width: "75%"}} />
                </div>
                <div className="col-6 mt-4">
                    <h3>Free and open market education</h3>
                    <p className="mt-4 text-muted">Versity, the largest online stock market education book in the world <br />covering everything fron the basics to advanced trading.</p>
                    <a href="" className="text-decoration-none">Versity <i className="fa-solid fa-arrow-right"></i></a>

                    <p className="mt-5 text-muted">TradingQ&A, the most active trading and investment community in <br />India for all your market level queries</p>
                    <a href="" className="text-decoration-none">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}