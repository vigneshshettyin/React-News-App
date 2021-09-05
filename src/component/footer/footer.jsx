const footer = () => {
  return (
    <>
      <div className="container-fluid ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                alt="react"
                src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png"
              />
            </a>
            <span className="text-muted">&copy; 2021 React News, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://github.com/vigneshshettyin/React-News-App"
              >
                <img
                  alt="github"
                  src="https://img.icons8.com/material-sharp/24/000000/github.png"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/">
                <img
                  alt="whatsapp"
                  src="https://img.icons8.com/material-outlined/24/000000/whatsapp.png"
                />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.linkedin.com/in/vigneshshettyin/"
              >
                <img
                  alt="linkedin"
                  src="https://img.icons8.com/material-outlined/24/000000/linkedin--v2.png"
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default footer;
