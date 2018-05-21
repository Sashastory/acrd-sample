import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Icon from "@material-ui/core/Icon";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    boxSizing: "border-box"
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main
  },
  listItemText: {
    color: "#fff"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  backendButton: {
    // backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing.unit * 3
  },
  reportButton: {
    // backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing.unit * 3
  },
  monitorButton: {
    // backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing.unit * 3
  },
  adminButton: {
    // backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing.unit * 3
  }
});

const options = [
  "Мониторинг и Уведомления",
  "Мониторинг мошенничества",
  "Эмиссия",
  "Правила"
];

class MainToolbar extends Component {
  state = {
    value: 4,
    anchorEl: null,
    selectedIndex: 1
  };

  backendClickHandler = () => {
    console.log("Backend button pressed");
  };

  reportClickHandler = () => {
    console.log("Report button pressed");
  };

  monitorClickHandler = () => {
    console.log("Monitor button pressed");
  };

  adminClickHandler = () => {
    console.log("Admin button pressed");
  };

  handleClickListItem = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
      anchorEl: null
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Toolbar className={classes.toolbar}>
        <div className={classes.root}>
          <List component="nav" className={classes.list}>
            <ListItem
              button
              aria-haspopup={"true"}
              aria-controls={"lock-menu"}
              aria-label={"Топкек"}
              onClick={this.handleClickListItem}
            >
              <ListItemText
                primary={"Фронтальная система"}
                secondary={options[this.state.selectedIndex]}
              />
            </ListItem>
          </List>
          <Menu
            id="front-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div>
          <Button
            variant={"raised"}
            color={"secondary"}
            className={classes.backendButton}
            onClick={this.backendClickHandler}
          >
            <Icon className={classes.leftIcon}>storage</Icon>
            Бэк-офисная система
          </Button>
          <Button
            variant={"raised"}
            color={"secondary"}
            className={classes.reportButton}
            onClick={this.reportClickHandler}
          >
            <Icon className={classes.leftIcon}>folder</Icon>
            Отчеты
          </Button>
          <Button
            variant={"raised"}
            color={"secondary"}
            className={classes.monitorButton}
            onClick={this.monitorClickHandler}
          >
            <Icon className={classes.leftIcon}>settings_system_daydream</Icon>
            Системный мониторинг
          </Button>
          <Button
            variant={"raised"}
            color={"secondary"}
            className={classes.adminButton}
            onClick={this.adminClickHandler}
          >
            <Icon className={classes.leftIcon}>settings</Icon>
            Администрирование
          </Button>
        </div>
      </Toolbar>
    );
  }
}

MainToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainToolbar);
