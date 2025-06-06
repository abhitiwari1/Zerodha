import { Link } from "react-router-dom"
export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-light border-bottom p-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="media/images/logo.svg" alt="Logo" style={{width: "18%", marginLeft: "180px"}} />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}