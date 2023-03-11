import { Routes, Route, Link } from "react-router-dom";
import Home from "../home/home";
import Messages from "../message/messages";
import Profile from "../profile/profile";
import "./navbar.scss";

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="navbar">
            <Link to="/">
              <img className="logo" src="img/logo.png" alt="" />
            </Link>
            <div>
              <ul className="navbar-right">
                <Link to="/message">
                  <img className="message-logo" src="img/message.png" alt="" />
                </Link>
                <Link to="/profile">
                  <img className="avatar-logo" src="img/avatar.png" alt="" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Messages />} path="/message" />
        <Route element={<Profile />} path="/profile" />
      </Routes>
    </>
  );
}

export default Navbar;
