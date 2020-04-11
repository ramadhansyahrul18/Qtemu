import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";

const MaterialUI = () => {
  return (
    <div>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography>News</Typography>
        </Toolbar>
      </AppBar>

      <br />
      <Card>
        <CardContent>asdasdasd</CardContent>
      </Card>
    </div>
  );
};

export default MaterialUI;
