export default function Brokerage() {
    return (
        <div className="container mt-4" style={{width: "75%", margin: "auto"}}>
            <ul className="nav nav-tabs" id="brokerageTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active fs-3" id="equity-tab" data-bs-toggle="tab" data-bs-target="#equity" role="tab">Equity</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link fs-3" id="currency-tab" data-bs-toggle="tab" data-bs-target="#currency" role="tab">Currency</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link fs-3" id="commodity-tab" data-bs-toggle="tab" data-bs-target="#commodity"  role="tab">Commodity</a>
                </li>
            </ul>

            <div className="tab-content mt-3">
                <div className="tab-pane fade show active" id="equity" role="tabpanel">
                    <table className="table-outline-only">
                        <thead className="table">
                            <tr>
                                <th> </th>
                                <td style={{fontWeight: "500", color: "gray"}}>Equity Delivery</td>
                                <td style={{fontWeight: "500", color: "gray"}}>Equity Intraday</td>
                                <td style={{fontWeight: "500", color: "gray"}}>F&O - Futures</td>
                                <td style={{fontWeight: "500", color: "gray"}}>F&O - Options</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>Zero Brokerage</td>
                                <td>0.03% or ₹20/executed <br />order whichever is lower</td>
                                <td>0.03% or ₹20/executed <br />order whichever is lower</td>
                                <td>Flat ₹20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on sell side</td>
                                <td>0.02% on sell side</td>
                                <td>
                                    <ul>
                                        <li>0.125% of the intrinsic value on <br />options that are bought and <br />exercised</li>
                                        <li>0.1% on sell side (on premium)</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Transaction <br />Charges</td>
                                <td>NSE: 0.00297%<br/>BSE: 0.00375%</td>
                                <td>NSE: 0.00297%<br/>BSE: 0.00375%</td>
                                <td>NSE: 0.00173%<br/>BSE: 0%</td>
                                <td>NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI <br />charges + transaction <br />charges)</td>
                                <td>18% on (brokerage + SEBI <br />charges + transaction <br />charges)</td>
                                <td>18% on (brokerage + SEBI <br />charges + transaction <br />charges)</td>
                                <td>18% on (brokerage + SEBI charges <br />+ transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.015% or ₹1500 / crore on <br />buy side</td>
                                <td>0.003% or ₹300 / crore on <br />buy side</td>
                                <td>0.002% or ₹200 / crore on <br />buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tab-pane fade" id="currency" role="tabpanel">
                    <table className="table-outline-only">
                        <thead className="table">
                            <tr>
                                <th></th>
                                <th style={{fontWeight: "500", color: "gray"}}>Currency Futures</th>
                                <th style={{fontWeight: "500", color: "gray"}}>Currency Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>₹20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>No STT</td>
                            </tr>
                            <tr>
                                <td>Transaction Charges</td>
                                <td>NSE: 0.00035%<br/>BSE: 0.00045%</td>
                                <td>NSE: 0.0311%<br/>BSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI Charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp Charges</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tab-pane fade" id="commodity" role="tabpanel">
                    <table className="table-outline-only">
                        <thead className="table">
                            <tr>
                                <th></th>
                                <th style={{fontWeight: "500", color: "gray"}}>Commodity Futures</th>
                                <th style={{fontWeight: "500", color: "gray"}}>Commodity Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>₹20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction Charges</td>
                                <td>MCX: 0.0021%<br/>NSE: 0.0001%</td>
                                <td>MCX: 0.0418%<br/>NSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI Charges</td>
                                <td>Agri: <br />₹1 / crore<br/>Non-agri: <br />₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp Charges</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center mt-4">
                <p style={{fontSize: "20px"}}><a href="" style={{textDecoration: "none"}}>Calculate your costs upfront</a> using our brokerage calculator</p>
            </div>
        </div>
    );
}