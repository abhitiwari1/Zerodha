
export default function Account(){
    return(
        <div className="container mt-5 p-5" style={{marginLeft: "175px", marginRight: "175px"}}>
            <h2 className="mb-5 text-center" style={{color: "rgba(21, 5, 5, 0.74)"}}>Explore different account types</h2>
            <div className="row">
                <div className="col-4">
                   <a href="" style={{textDecoration: "none"}}>
                        <div className="card">
                            <div className="icon-wrapper">
                                <img src="media/images/individual.svg" alt="Individual Icon" className="icon" />
                            </div>
                            <div className="content" style={{marginTop: "-35px", marginLeft: "30px"}}>
                                <h3>Individual Account</h3>
                                <p className="mt-4">Invest in equity, mutual funds and <br />derivatives</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <a href="" style={{textDecoration: "none"}}>
                        <div className="card">
                            <div className="icon-wrapper">
                                <img src="media/images/huf.svg" alt="HUF Icon" className="icon" />
                            </div>
                            <div className="content" style={{marginTop: "-35px", marginLeft: "30px"}}>
                                <h3>HUF Account</h3>
                                <p className="mt-4">Make tax-efficient investments for <br />your family</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                     <a href="" style={{textDecoration: "none"}}>
                        <div className="card">
                            <div className="icon-wrapper">
                                <img src="media/images/nri.svg" alt="NRI Icon" className="icon" />
                            </div>
                            <div className="content" style={{marginTop: "-35px", marginLeft: "30px"}}>
                                <h3>NRI Account</h3>
                                <p className="mt-4">Invest in equity, mutual funds, <br />debenture, and more</p>
                            </div>
                        </div>
                   </a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-4">
                   <a href="" style={{textDecoration: "none"}}>
                        <div className="card">
                            <div className="icon-wrapper">
                                <img src="media/images/minor.svg" alt="Minor Icon" className="icon" />
                            </div>
                            <div className="content" style={{marginTop: "-35px", marginLeft: "30px"}}>
                                <h3>Minor Account</h3>
                                <p className="mt-4">Teach your little ones about money <br />& invest for their future with them</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <a href="" style={{textDecoration: "none"}}>
                        <div className="card">
                            <div className="icon-wrapper">
                                <img src="media/images/corporate.svg" alt="Corporate Icon" className="icon" />
                            </div>
                            <div className="content" style={{marginTop: "-35px", marginLeft: "30px"}}>
                                <h3>Corporate / LLP/ Partnership</h3>
                                <p className="mt-4">Manage your business surplus and <br />investments easily</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                   &nbsp;  
                </div>
            </div>
        </div>
    );
}