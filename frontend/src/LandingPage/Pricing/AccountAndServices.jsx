export default function AccountAndServices() {
    return(
        <div className="container mt-5" style={{ width: "75%", margin: "auto", marginBottom: "100px" }}>
            <h3 className="mb-4">Charges for account opening</h3>
            <table className="table-outline-only" style={{width: "100%"}}>
                <thead className="table">
                    <tr>
                        <th style={{fontWeight: "400"}}>Type of account</th>
                        <th style={{fontWeight: "400"}}>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Online account</td>
                        <td><span className="badge bg-success px-3 py-2 fs-6">FREE</span></td>
                    </tr>
                    <tr>
                        <td>Offline account</td>
                        <td><span className="badge bg-success px-3 py-2 fs-6">FREE</span></td> 
                    </tr>
                    <tr>
                        <td>NRI account (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="mb-4" style={{marginTop: "100px"}}>Charges for optional value added services</h3>
            <table className="table-outline-only" style={{width: "100%"}}>
                <thead className="table">
                    <tr>
                        <th style={{fontWeight: "400"}}>Service</th>
                        <th style={{fontWeight: "400"}}>Billing frequency</th>
                        <th style={{fontWeight: "400"}}>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tickertape</td>
                        <td>Monthly / Annual</td>
                        <td>Free: 0 | Pro: 249/2399</td>
                    </tr>
                    <tr>
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td> 
                    </tr>
                    <tr>
                        <td>Kite Connect</td>
                        <td>Monthly</td>
                        <td>Connect: 500 | Historical: 500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
