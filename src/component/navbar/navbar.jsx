import "./style.css";

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
              <button className="btn btn-outline-primary">Cat - 1</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary">Cat - 2</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary">Cat - 3</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary">Cat - 4</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary">Cat - 5</button>
            </li>
          </ul>
        </header>
      </div>

      <div className="b-example-divider"></div>
    </>
  );
};

export default Navbar;
