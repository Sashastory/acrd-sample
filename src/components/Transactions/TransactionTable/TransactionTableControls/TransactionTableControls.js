import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    marginTop: theme.spacing.unit
  },
  openExclContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start"
  },
  blockContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  addExclContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  openButton: {
    marginRight: theme.spacing.unit * 2
  },
  excludeButton: {
    marginRight: theme.spacing.unit * 2
  },
  blockButton: {
    marginRight: theme.spacing.unit * 2
  },
  addExclusionButton: {}
});

class TransactionTableControls extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.openExclContainer}>
          <Button className={classes.openButton} variant={"raised"} disabled>
            Открыть выбранные
          </Button>
          <Button className={classes.excludeButton} variant={"raised"} disabled>
            Исключить карту
          </Button>
        </div>
        <div className={classes.blockContainer}>
          <Button className={classes.blockButton} variant={"raised"} disabled>
            Заблокировать карту
          </Button>
        </div>
        <div className={classes.addExclContainer}>
          <Button className={classes.addExclusionButton} variant={"raised"} disabled>
            Добавить исключение
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TransactionTableControls);
