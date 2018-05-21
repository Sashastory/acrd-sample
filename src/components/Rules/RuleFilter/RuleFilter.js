import React, { Component } from "react";
import cssClasses from "./RuleFilter.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  },
  searchFields: {
    padding: "24px"
  },
  filterButtons: {
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "24px"
  },
  ruleIdField: {
    marginRight: theme.spacing.unit * 2
  },
  minExpDateField: {
    marginRight: theme.spacing.unit * 2
  },
  maxExpDateField: {
    marginRight: theme.spacing.unit * 2
  },
  descriptionField: {
    marginRight: theme.spacing.unit * 2
  },
  iconStyle: {
    color: theme.palette.secondary.light
  },
  searchButton: {
    // backgroundColor: theme.palette.secondary.light,
    marginRight: theme.spacing.unit * 3
  },
  clearButton: {
    marginRight: theme.spacing.unit * 3
  },
  paper: {
    backgroundColor: theme.palette.primary.main
  }
});

class RuleFilter extends Component {
  state = {
    ruleId: "",
    minExpDate: "",
    maxExpDate: "",
    description: ""
  };

  onRuleIdChangeHandler = event => {
    this.setState({
      ruleId: event.target.value
    });
  };

  onMinExpDateChangeHandler = (event, date) => {
    this.setState({
      minExpDate: date
    });
  };

  onMaxExpDateChangeHandler = (event, date) => {
    this.setState({
      maxExpDate: date
    });
  };

  onDescriptionChangeHandler = event => {
    this.setState({
      description: event.target.value
    });
  };

  onSearchClickHandler = () => {
    console.log("Performing datasource search....");
  };

  onClearClickHandler = () => {
    this.setState({
      ruleId: "",
      minExpDate: "",
      maxExpDate: "",
      description: ""
    });
  };

  render() {
    //AutoComplete instead of TextField using Datasource?

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.searchFields}>
          <TextField
            id={"ruleIdField"}
            label={"ID правила:"}
            className={classes.ruleIdField}
            value={this.state.ruleId}
            onChange={event => this.onRuleIdChangeHandler(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon className={classes.iconStyle}>perm_identity</Icon>
                </InputAdornment>
              )
            }}
          />
          <TextField
            id={"minDateField"}
            type={"date"}
            label={"Мин. дата окончания"}
            className={classes.minExpDateField}
            value={this.state.minExpDate}
            onChange={event => this.onMinExpDateChangeHandler(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon className={classes.iconStyle}>calendar_today</Icon>
                </InputAdornment>
              )
            }}
          />
          <TextField
            id={"maxDateField"}
            type={"date"}
            label={"Макс. дата окончания"}
            className={classes.maxExpDateField}
            value={this.state.maxExpDate}
            onChange={event => this.onMaxExpDateChangeHandler(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon className={classes.iconStyle}>calendar_today</Icon>
                </InputAdornment>
              )
            }}
          />
          <TextField
            id={"descriptionField"}
            label={"Описание"}
            value={this.state.description}
            className={classes.descriptionField}
            onChange={event => this.onDescriptionChangeHandler(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon className={classes.iconStyle}>description</Icon>
                </InputAdornment>
              )
            }}
          />
        </div>
        <div className={classes.filterButtons}>
          <Button
            variant={"raised"}
            color={"secondary"}
            className={classes.searchButton}
            onClick={this.onSearchClickHandler}
          >
            Найти
          </Button>

          <Button
            variant={"raised"}
            color={"inherit"}
            className={classes.clearButton}
            onClick={this.onClearClickHandler}
          >
            Сбросить
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RuleFilter);
