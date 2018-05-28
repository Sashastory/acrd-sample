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
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import RuleTableHead from "../RuleTable/RuleTableHead/RuleTableHead";
import RuleTableToolbar from "../RuleTable/RuleTableToolbar/RuleTableToolbar";

import classes from "./RuleTable.css";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
  // tableHead: {
  //   backgroundColor: theme.palette.primary.dark
  // },
  // tableRow: {
  //   backgroundColor: theme.palette.secondary.light
  // },
  // ruleButtons: {
  //   marginLeft: "24px",
  //   marginRight: "24px",
  //   marginTop: "12px",
  //   marginBottom: "12px"
  // },
  // ruleSelectButton: {
  //   marginRight: theme.spacing.unit * 2
  // },
  // addButton: {
  //   marginRight: theme.spacing.unit * 2
  // },
  // editButton: {
  //   marginRight: theme.spacing.unit * 2
  // },
  // deleteButton: {
  //   marginRight: theme.spacing.unit * 2
  // },
  // hpanButton: {
  //   marginRight: theme.spacing.unit * 2
  // }
});

class RuleTable extends Component {
  componentDidMount() {
    this.props.onFetchRules();
  }

  state = {
    selected: [],
    page: 0,
    rowsPerPage: 5
  };

  ruleSelectClickHandler = rule => {
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

  pageChangeHandler = (event, page) => {
    this.setState({ page });
  };

  rowsPerPageChangeHandler = event => {
    this.setState({
      rowsPerPage: event.target.value
    });
  };

  isSelected = id => this.props.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { rules, order, orderBy, selected } = this.props;
    const { page, rowsPerPage } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rules.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <RuleTableToolbar />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <RuleTableHead />
            <TableBody>
              {rules
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(rule => {
                  const isSelected = this.isSelected(rule.id);
                  return (
                    <TableRow
                      hover
                      onClick={() => this.props.onChangeSelectedAmount(rule.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={rule.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {rule.id}
                      </TableCell>
                      <TableCell>{rule.group}</TableCell>
                      <TableCell>{rule.signal}</TableCell>
                      <TableCell>{rule.riskValue}</TableCell>
                      <TableCell>{rule.beginDate}</TableCell>
                      <TableCell>{rule.endDate}</TableCell>
                      <TableCell>{rule.type}</TableCell>
                      <TableCell>{rule.author}</TableCell>
                      <TableCell>{rule.description}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={10} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={rules.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Предыдущая страница"
          }}
          nextIconButtonProps={{
            "aria-label": "Следующая страница"
          }}
          onChangePage={this.pageChangeHandler}
          onChangeRowsPerPage={this.rowsPerPageChangeHandler}
        />
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    rules: state.rules,
    order: state.order,
    selected: state.selected,
    orderBy: state.orderBy,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRules: () => dispatch(actions.fetchRules()),
    onShowRuleDetails: rule => dispatch(actions.showRuleDetais(rule)),
    onChangeSelectedAmount: selectedId =>
      dispatch(actions.changeSelectedAmount(selectedId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(RuleTable)
);
