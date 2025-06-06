export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-light border-bottom p-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="media/images/logo.svg" alt="Logo" style={{width: "25%", marginLeft: "100px"}} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}