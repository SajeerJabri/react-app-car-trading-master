import React from "react";
import "./Header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user_token"]);
  const user_token = cookies["user_token"];
  //   console.log("token: ", user_token);

  // handle logout button
  const logOut = () => {
    removeCookie("user_token");
  };

  return (
    <div className="header">
      {/* =======navbar========= */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <Link to="/">Car Image Category</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#">
              <Link to="/">Interior Marking</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/exterior">Exterior Marking</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/auction-sheet">Auction Sheet Marking</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/profile">Report Page</Link>
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            <div className="header__user_info">
              <AccountCircleIcon />
              <span className="header__username">
                {user_token.toUpperCase()}
              </span>
            </div>
          </Navbar.Text>
          <Button variant="outline-info" onClick={logOut}>
            LogOut
          </Button>
        </Navbar.Collapse>
      </Navbar>

      {/* =======navbar=========== */}
    </div>
  );
};

export default Header;
