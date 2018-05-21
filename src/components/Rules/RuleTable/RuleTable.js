import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { lighten } from "@material-ui/core/styles/colorManipulator";

import classes from "./RuleTable.css";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    marginTop: theme.spacing.unit * 3
  },
  table: {},
  tableHead: {
    backgroundColor: theme.palette.primary.dark
  },
  tableRow: {
    backgroundColor: theme.palette.secondary.light
  },
  ruleButtons: {
    marginLeft: "24px",
    marginRight: "24px",
    marginTop: "12px",
    marginBottom: "12px"
  },
  ruleSelectButton: {
    // backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing.unit * 2
  },
  addButton: {
    // backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing.unit * 2
  },
  editButton: {
    // backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing.unit * 2
  },
  deleteButton: {
    // backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing.unit * 2
  },
  hpanButton: {
    // backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing.unit * 2
  }
});

const columnData = [
  {
    id: 15,
    group: 11,
    signal: "NO",
    riskValue: 34,
    beginDate: "03.04.2018",
    endDate: "27.04.2018",
    type: "save precedent",
    author: "alfa_iss",
    description: "test"
  },
  {
    id: 14,
    group: 12,
    signal: "NO",
    riskValue: 35,
    beginDate: "05.04.2018",
    endDate: "28.04.2018",
    type: "save_precendent",
    authore: "alfa_iss",
    description: "second test"
  },
  {
    id: 22,
    group: 5,
    signal: "NO",
    riskValue: 15,
    beginDate: "08.04.2018",
    endDate: "01.05.2018",
    type: "save_precendent",
    authore: "alfa_iss",
    description: "third test"
  }
];

class RuleTable extends Component {
  state = {
    selected: [1]
  };

  ruleSelectClickHandler = () => {
    console.log("Rule select button pressed");
  };

  addClickHandler = () => {
    console.log("Add button pressed");
  };

  editClickHandler = () => {
    console.log("Edit button pressed");
  };

  deleteClickHandler = () => {
    console.log("Delete button pressed");
  };

  hpanClickHandler = () => {
    console.log("HPAN button pressed");
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Группа</TableCell>
              <TableCell>Сигнал</TableCell>
              <TableCell>Значение риска</TableCell>
              <TableCell>Дата С</TableCell>
              <TableCell>Дата По</TableCell>
              <TableCell>Тип</TableCell>
              <TableCell>Автор</TableCell>
              <TableCell>Описание</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {columnData.map(n => {
              return (
                <TableRow key={n.id} className={classes.tableRow}>
                  <TableCell component="th" scope="row">
                    {n.id}
                  </TableCell>
                  <TableCell>{n.group}</TableCell>
                  <TableCell>{n.signal}</TableCell>
                  <TableCell>{n.riskValue}</TableCell>
                  <TableCell>{n.beginDate}</TableCell>
                  <TableCell>{n.endDate}</TableCell>
                  <TableCell>{n.type}</TableCell>
                  <TableCell>{n.author}</TableCell>
                  <TableCell>{n.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className={classes.ruleButtons}>
          <Button
            variant={"raised"}
            color={"primary"}
            className={classes.ruleSelectButton}
            onClick={this.ruleSelectClickHandler}
          >
            Выбрать правила
          </Button>
          <Button
            variant={"raised"}
            color={"primary"}
            className={classes.addButton}
            onClick={this.addClickHandler}
          >
            Добавить
          </Button>
          <Button
            variant={"raised"}
            color={"primary"}
            className={classes.editButton}
            onClick={this.editClickHandler}
          >
            Изменить
          </Button>
          <Button
            variant={"raised"}
            color={"primary"}
            className={classes.deleteButton}
            onClick={this.deleteClickHandler}
          >
            Удалить
          </Button>
          <Button
            variant={"raised"}
            color={"primary"}
            className={classes.hpanButton}
            onClick={this.hpanClickHandler}
          >
            HPAN
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(RuleTable);
