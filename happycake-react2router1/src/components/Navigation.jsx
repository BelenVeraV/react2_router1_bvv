import { Link } from "react-router-dom";

export default function Navigation() {
    
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item text-white">
                            <Link to="/" className="nav-link active text-white ms-3 text-decoration-none">
                                <h5>Home</h5>

                            </Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link to="/contacto" className="nav-link text-white ms-3 text-decoration-none">
                                <h5>Contacto</h5>

                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text text-white ms-3 text-decoration-none">
                        <h2>Happy Cake</h2>
                    </span>
                </div>
            </div>
        </nav>
    );
};
