import React, { Component } from "react";
import classes from "./AppToolbar.css";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  appToolbar: {
    backgroundColor: theme.palette.primary.dark
  },
  helpButton: {
    // backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing.unit * 3
  },
  exitButton: {
    // backgroundColor: theme.palette.secondary.dark,
    marginLeft: theme.spacing.unit * 3
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  toolbarStyle: {
    justifyContent: "flex-end"
  }
});

class AppToolbar extends Component {
  helpClickHandler = () => {
    console.log("Help button pressed!");
  };

  exitClickHandler = () => {
    console.log("Exit button pressed");
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position={"static"} className={classes.appToolbar}>
          <Toolbar>
            <Typography
              variant={"title"}
              color={"inherit"}
              className={classes.flex}
            >
              ACRD-Sample
            </Typography>
            <Button
              variant={"raised"}
              color={"secondary"}
              className={classes.helpButton}
            >
              <Icon className={classes.leftIcon}>help</Icon>
              Помощь
            </Button>
            <Button
              variant={"raised"}
              color={"inherit"}
              className={classes.exitButton}
            >
              <Icon className={classes.leftIcon}>exit_to_app</Icon>
              Выход
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppToolbar);
