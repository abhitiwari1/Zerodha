export default function DematAccount() {
    return(
        <div className="main bg-body-tertiary mt-5 p-5">
            <div className="container">
                <h2 className="text-center" style={{marginBottom: "10px"}}>Steps to open a demat account with Zerodha</h2>
                <div className="row" style={{marginLeft: "200px", marginRight: "150px", marginTop: "50px"}}>
                    <div className="col-6">
                        <img src="media/images/dematAccount.svg" alt="Demat Account" />
                    </div>
                    <div className="col-6" style={{marginTop: "50px"}}>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <p style={{ margin: 0, width: "30px", height: "30px", borderRadius: "50%", border: "1px solid gray", display: "flex", alignItems: "center", justifyContent: "center" }}>01</p>
                                <h5 className="text-muted" style={{ margin: 0 }}>Enter the requested details</h5>
                            </span>
                        </div>

                        <div className="mt-3 border-bottom"></div>
                        
                        <div className="mt-3" style={{ display: "flex", flexWrap: "wrap" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <p style={{ margin: 0, width: "30px", height: "30px", borderRadius: "50%", border: "1px solid gray", display: "flex", alignItems: "center", justifyContent: "center" }}>02</p>
                                <h5 className="text-muted" style={{ margin: 0 }}>Complete e-sign & verification</h5>
                            </span>
                        </div>

                        <div className="mt-3 border-bottom"></div>
                        
                        <div className="mt-3" style={{ display: "flex", flexWrap: "wrap"}}>
                            <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <p style={{ margin: 0, width: "30px", height: "30px", borderRadius: "50%", border: "1px solid gray", display: "flex", alignItems: "center", justifyContent: "center" }}>03</p>
                                <h5 className="text-muted" style={{ margin: 0 }}>Start investing!</h5>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}