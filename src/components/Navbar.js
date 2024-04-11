import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import logo from "../images/icon.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h6" style={{ marginLeft: "10px" }}>
          Coral Consutancy Services
        </Typography>

        <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
        <Link to="/home">
          <Button style={{ color: "white" }}>Homepage</Button>
        </Link>
        <Link to="/contactus">
          <Button style={{ color: "white" }}>Contact us</Button>
        </Link>
        <Link to="/ourservices">
          <Button style={{ color: "white" }}>Our Services</Button>
        </Link>
        <Link to="/careers">
          <Button style={{ color: "white" }}>Careers at CCS</Button>
        </Link>
        <Link to="/aboutus">
          <Button style={{ color: "white" }}>About Us</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
