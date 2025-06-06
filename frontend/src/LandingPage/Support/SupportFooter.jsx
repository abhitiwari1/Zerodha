
export default function SupportFooter() {
    return (
        <footer className="bg-body-tertiary " style={{marginTop: "80px"}}>
            <div className="border-top">
                <div className="row mt-5" style={{width: "75%", margin: 'auto'}}>
                    <div className="col redirect">
                        <img src="media/images/logo.svg" alt="Logo" style={{width: "60%"}} />
                        <p className="mt-3 text-muted" style={{fontSize: "0.7rem"}}>&copy; 2010 - 2024, Not Zerodha Broking Ltd.<br/> All rights reserved.</p>
                        <div className="mt-3 d-flex justify-content-between" style={{width: "70%"}}>
                            <a className='fs-5' href=""><i className="fa-brands fa-x-twitter"></i></a>
                            <a className='fs-5' href=""><i className="fa-brands fa-square-facebook"></i></a>
                            <a className='fs-5' href=""><i className="fa-brands fa-instagram"></i></a>
                            <a className='fs-5' href=""><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="col redirect">
                        <p className="fs-5">Company</p>
                        <a href="">About</a><br />
                        <a href="">Products</a><br />
                        <a href="">Pricing</a><br />
                        <a href="">Referral programme</a><br />
                        <a href="">Careers</a><br />
                        <a href="">Press & media</a><br />
                        <a href="">Zerodha Cares (CSR)</a><br />
                    </div>
                    
                    <div className="col redirect">
                        <p className="fs-5">Support</p>
                        <a href="#">Contact</a><br />
                        <a href="#">Support portal</a><br />
                        <a href="#">Z-Connect blog</a><br />
                        <a href="#">List of charges</a><br />
                        <a href="#">Downloads & resources</a><br />
                    </div>

                    <div className="col redirect">
                        <p className="fs-5">Account</p>
                        <a href="">Open an account</a><br />
                        <a href="">Fund transfer</a><br />
                    </div>

                </div>
            </div>
        </footer>
    )
}