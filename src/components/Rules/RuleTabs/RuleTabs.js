import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import RuleDetails from "./RuleDetails/RuleDetails";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    // backgroundColor: theme.palette.secondary.light
  }
});

class RuleTabs extends Component {
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
      <div>
        <Tabs 
          value={tabIndex}
          onChange={this.tabChangeHandler}
        //   className={classes.tabs}
          indicatorColor={"secondary"}
          textColor={"secondary"}
        >
          <Tab label="Детали" />
          <Tab label="Проверки" />
        </Tabs>
        {tabIndex === 0 && <RuleDetails />}
        {tabIndex === 1 && <p>Second tab</p>}
      </div>
    );
  }
}

export default withStyles(styles)(RuleTabs);
