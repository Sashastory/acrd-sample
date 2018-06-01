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
import NotificationMenu from "../Menu/NotificationMenu/NotificationMenu";
import RuleSettingsMenu from "../Menu/RuleSettingsMenu/RuleSettingsMenu";
import ListMenu from "../Menu/ListMenu/ListMenu";
import AdministrationMenu from "../Menu/AdministrationMenu/AdministrationMenu";
import NavigationItem from "../NavigationItem/NavigationItem";

const styles = theme => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing.unit * 2
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark
  },
  leftContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-start"
  },
  rightContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  mainButton: {
    marginRight: theme.spacing.unit * 3
  },
  transButton: {}
});

class AppToolbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position={"static"} color={"primary"}>
          <Toolbar>
            <div className={classes.leftContainer}>
              <Button
                aria-haspopup="false"
                variant={"raised"}
                color={"secondary"}
                className={classes.mainButton}
              >
                <NavigationItem link="/">
                  <Typography color={"inherit"}>Главная</Typography>
                </NavigationItem>
              </Button>
              <NotificationMenu />
              <RuleSettingsMenu />
              <ListMenu />
              <AdministrationMenu />
            </div>
            <div className={classes.rightContainer}>
              <Button variant={"raised"} color={"secondary"}>
                <NavigationItem link="/transactions">
                  <Typography color={"inherit"}>Транзакции</Typography>
                </NavigationItem>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppToolbar);
