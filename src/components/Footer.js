import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <Box
        style={{ display: "flex", justifyContent: "center" }}
        sx={{ bgcolor: "background.paper" }}
        component="footer"
      >
        <Typography style={{ marginRight: "3px" }} variant="body2" align="center" color="textSecondary">
          "Empowering IT Excellence through Strategic Consulting and Bridging Expertise"
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
          Coral Consulting Services ©<span>CCS</span> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>

      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ marginRight: "15px" }} variant="body2" color="textSecondary">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Home
          </Link>
        </Typography>
        <Typography style={{ marginRight: "15px" }} variant="body2" color="textSecondary">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/aboutus">
            About us
          </Link>
        </Typography>
        <Typography style={{ marginRight: "15px" }} variant="body2" color="textSecondary">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/ourservices">
            Our Services
          </Link>
        </Typography>
        <Typography style={{ marginRight: "15px" }} variant="body2" color="textSecondary">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/careers">
            Careers
          </Link>
        </Typography>
        <Typography style={{ marginRight: "15px" }} variant="body2" color="textSecondary">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/contactus">
            Contact Us
          </Link>
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
