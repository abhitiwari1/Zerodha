export default function SignUp() {
    return (
        <div className="container mt-5 p-5 mb-5 mt-5" style={{marginLeft: "230px", marginRight: "250px"}}>
            <h1 style={{fontSize: "44px"}}>Open a free demat and trading account online</h1>
            <p className="fs-5 mt-4 mb-5 text-muted" style={{marginLeft: "70px", fontWeight: "500"}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            <div className="row mt-5">
                <div className="col-6" style={{marginTop: "50px"}}>
                    <img src="media/images/directMutualFund.svg" alt="Mutual Fund" style={{width: "85%"}}/>
                </div>
                <div className="col-6" style={{marginLeft: "-50px", marginTop: "90px"}}>
                    <h1 style={{fontSize: "35px"}} className="text-muted">Signup now</h1>
                    <p className="mt-3 text-muted" style={{fontSize: "18px"}}>Or track your existing application</p>
                    <form id="open_account_form" >
                        <div className="row mb-4" style={{display: "flex", flexWrap: "wrap", marginLeft: "3px"}}>
                            <span className="mobile_prefix col-2 border" style={{  padding: "12px"}}>
                                <img src="media/images/india-flag.svg" alt="" /> +91
                                <span className="nri-link" style={{display: "none", width: "170px", fontSize: "14px", padding: "10px", background: "#fff", border: "1px solid #e1e1e1", borderRadius: "3px", top: "60px", left: "2px"}}>
                                    "NRI account?"
                                    <a href="" style={{textDecoration: "none"}}>Click here</a>
                                </span>
                            </span>
                            <input className="col-5 border fs-5" style={{width: "50%"}} type="number" autofocus min="1000000000" max="9999999999" name="mobile"  id="user_mobile" placeholder="Enter your mobile number" required/>
                        </div>
                    </form>
                    <button className="btn btn-primary rounded p-3 mb-4" style={{width: "45%"}} type="submit">Get OTP</button>
                <p className="text-muted" style={{fontSize: "0.9rem"}}>By proceeding, you agree to the Zerodha <a style={{textDecoration: "none"}} href="">terms</a> & <a style={{textDecoration: "none"}} href="">privacy policy</a></p>
                </div>
            </div>
        </div>
    );
}