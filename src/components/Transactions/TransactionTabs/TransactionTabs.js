import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import TransactionDetails from "./TransactionDetails/TransactionDetails";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  tabs: {
    backgroundColor: theme.palette.secondary.light
  }
});

class TransactionTabs extends Component {
  state = {
    tabIndex: 0
  };

  tabChangeHandler = (event, value) => {
    this.setState({tabIndex: value});
  };

  render() {
    const { classes } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className={classes.root}>
        <Tabs 
          value={tabIndex}
          onChange={this.tabChangeHandler}
          indicatorColor={"secondary"}
          textColor={"secondary"}
        >
          <Tab label="Основные свойства" />
          <Tab label="Scoring" />
        </Tabs>
        {tabIndex === 0 && <TransactionDetails />}
        {tabIndex === 1 && <p>Second tab</p>}
      </div>
    );
  }
}

export default withStyles(styles)(TransactionTabs);
