import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img
              src="https://res.cloudinary.com/vigneshshettyin/image/upload/v1630570747/tlcl5hmvtnumv7jwydvy.gif"
              alt="logo-javascript"
              height="50"
              width="50"
            />
            <span className="fs-4">React News</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/category/facebook" className="btn btn-outline-primary">
                Facebook
              </Link>
              <Link to="/category/apple" className="btn btn-outline-primary">
                Apple
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/amazon" className="btn btn-outline-primary">
                Amazon
              </Link>
              <Link to="/category/netflix " className="btn btn-outline-primary">
                Netflix
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/google" className="btn btn-outline-primary">
                Google
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </header>
      </div>

      <div className="b-example-divider"></div>
    </>
  );
};

export default Navbar;
