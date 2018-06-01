import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  searchFields: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-start",
    marginLeft: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
  },
  intervalContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  updateIntervalField: {
    marginRight: theme.spacing.unit * 2
  },
  startButton: {
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  },
  transFilterButtons: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: theme.spacing.unit * 3,
  },
  filtersPanel: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  iconStyle: {},
  searchButton: {
    marginRight: theme.spacing.unit * 2
  },
  clearButton: {
    marginRight: theme.spacing.unit * 2
  },
  cardNumberField: {
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.text.main 
  },
  dateFromField: {
    marginRight: theme.spacing.unit * 2
  },
  dateUntilField: {
    marginRight: theme.spacing.unit * 2
  },
  flagField: {
    marginRight: theme.spacing.unit * 2
  }
});

const flags = [
  {
    label: "SUSPECT",
    value: 1
  },
  {
    label: "XZ CHTO",
    value: 2
  },
  {
    label: "KEK",
    value: 3
  }
];

class TransactionFilter extends Component {
  state = {
    cardNumber: "",
    dateFrom: "",
    dateUntil: "",
    flag: "",
    updateInterval: ""
  };

  fieldChangeHandler = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSearchClickHandler = () => {
    console.log("Performing datasource search....");
  };

  onClearClickHandler = () => {
    this.setState({
      cardNumber: "",
      dateFrom: "",
      dateUntil: "",
      flag: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.searchFields}>
          <TextField
            id={"card-number-field"}
            label={"Номер карты:"}
            value={this.state.cardNumber}
            className={classes.cardNumberField}
            onChange={this.fieldChangeHandler("cardNumber")}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon color={"secondary"} className={classes.iconStyle}>credit_card</Icon>
                </InputAdornment>
              )
            }}
          />
          <TextField
            id={"date-from-field"}
            label={"C:"}
            type={"date"}
            value={this.state.dateFrom}
            className={classes.dateFromField}
            onChange={this.fieldChangeHandler("dateFrom")}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon color={"secondary"} className={classes.iconStyle}>calendar_today</Icon>
                </InputAdornment>
              )
            }}
          />
          <TextField
            id={"date-until-field"}
            label={"По:"}
            type={"date"}
            value={this.state.dateUntil}
            className={classes.dateUntilField}
            onChange={this.fieldChangeHandler("dateUntil")}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon color={"secondary"} className={classes.iconStyle}>calendar_today</Icon>
                </InputAdornment>
              )
            }}
          />
          <TextField
            id={"flag-field"}
            select
            label="Флаг:"
            value={this.state.flag}
            className={classes.flagField}
            onChange={this.fieldChangeHandler("flag")}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Icon color={"secondary"} className={classes.iconStyle}>flag</Icon>
                </InputAdornment>
              )
            }}
          >
            {flags.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div className={classes.intervalContainer}>
            <TextField
              id={"update-interval-field"}
              label={"Интервал обновления:"}
              value={this.state.updateInterval}
              className={classes.updateIntervalField}
              onChange={this.fieldChangeHandler("updateInterval")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <Icon color={"secondary"} className={classes.iconStyle}>av_timer</Icon>
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant={"raised"}
              color={"secondary"}
              size={"small"}
              className={classes.startButton}
            >
              Старт
            </Button>
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.transFilterButtons}>
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
              color={"secondary"}
              className={classes.clearButton}
              onClick={this.onClearClickHandler}
            >
              Сбросить
            </Button>
          </div>
          <div className={classes.filtersPanel}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant={"subheading"} color={"inherit"}>
                  Дополнительные фильтры
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Какие-то дополнительные фильтры/свое наполнение
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TransactionFilter);
