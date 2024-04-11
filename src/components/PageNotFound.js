import React from "react";
import { Typography } from "@mui/material";
function RouteNotFound() {
  return (
    <div>
      <br />
      <br />
      <Typography variant="h1">404</Typography>
      <Typography component="h2" variant="overline">
        {"Page not found!"}
      </Typography>
    </div>
  );
}

export default RouteNotFound;
