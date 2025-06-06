export default function Hero() {
    return(
        <div className="container p-5 mb-5 mt-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online plateform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className="p-2 btn btn-primary mt-3 fs-5 mb-5" style={{width: "15%", margin: "0 auto"}}>Signup now</button>
            </div>
        </div>
    )
}