import { FC, useState } from "react";
import MyPopupModal from "../MyPopupModal";
import AboutPopup from "../AboutPopup";

const ChatBoxHeader: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="chatbox-header">
        <nav className="navbar navbar-expand-lg bg-body">
          <div className="container">
            <a className="navbar-brand chatbox-logo" href="#">
              <img src="/logo.png" alt="logo" />
              <span className="logo-title ps-3 fs-1">MAIA</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#"
                    onClick={handleShow}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <MyPopupModal show={show} title="About" handleClose={handleClose}>
        <AboutPopup />
      </MyPopupModal>
    </>
  );
};

export default ChatBoxHeader;
