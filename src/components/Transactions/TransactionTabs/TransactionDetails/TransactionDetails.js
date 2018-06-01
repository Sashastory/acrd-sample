import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing.unit * 2
  },
  leftContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
    paddingRight: theme.spacing.unit * 2
  },
  middleContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: theme.spacing.unit * 2
  },
  rightContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "end",
  },
  textField: {
    marginTop: theme.spacing.unit * 2
  }
});

class TransactionDetails extends Component {
  fieldChangeHandler = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes, transaction } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.leftContainer}>
          <TextField
            id="card-number-field"
            label="Номер карты"
            value={transaction.cardNumber}
            className={classes.textField}
            onChange={this.fieldChangeHandler("cardNumber")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="amount-field"
            label="Сумма запроса"
            value={transaction.amount}
            className={classes.textField}
            onChange={this.fieldChangeHandler("amount")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="currency-field"
            label="Валюта"
            value={transaction.currency}
            className={classes.textField}
            onChange={this.fieldChangeHandler("currency")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="id-field"
            label="Номер транзакции"
            value={transaction.id}
            className={classes.textField}
            onChange={this.fieldChangeHandler("id")}
            InputLabelProps={{
                shrink: true,
              }}
          />
        </div>
        <div className={classes.middleContainer}>
          <TextField
            id="city-field"
            label="Город"
            value={transaction.city}
            className={classes.textField}
            onChange={this.fieldChangeHandler("city")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="terminalId-field"
            label="ID банкомата"
            value={transaction.terminalId}
            className={classes.textField}
            onChange={this.fieldChangeHandler("terminalId")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="institute-field"
            label="ID института эквайера"
            value={transaction.institute}
            className={classes.textField}
            onChange={this.fieldChangeHandler("institute")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="rules-field"
            label="Правила"
            value={transaction.rules}
            className={classes.textField}
            onChange={this.fieldChangeHandler("rules")}
            InputLabelProps={{
                shrink: true,
              }}
          />
        </div>
        <div className={classes.rightContainer}>
          <TextField
            id="operationCode-field"
            label="Тип операции"
            value={transaction.operationCode}
            className={classes.textField}
            onChange={this.fieldChangeHandler("cardNumber")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="category-field"
            label="Кат. мерчанта"
            value={transaction.category}
            className={classes.textField}
            onChange={this.fieldChangeHandler("category")}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="otv-field"
            label="Номер карты"
            value={transaction.otv}
            className={classes.textField}
            onChange={this.fieldChangeHandler("otv")}
            InputLabelProps={{
                shrink: true,
              }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transaction: state.transactionsR.transaction
  };
};

export default connect(mapStateToProps)(withStyles(styles)(TransactionDetails));
