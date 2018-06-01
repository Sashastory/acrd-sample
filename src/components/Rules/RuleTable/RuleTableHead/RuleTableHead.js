import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import * as actions from "../../../../store/actions/index";

class RuleTableHead extends Component {
  componentDidMount() {
    this.props.onFetchColumnData();
  }

  createSortHandler = property => event => {
    this.props.onSortRuleTable(property);
  };

  onSelectAllRules = (event, checked) => {
    this.props.onSelectAllRules(checked);
  };

  render() {
    const { columnData, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={this.onSelectAllRules}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? "none" : "default"}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Сортировать"
                  placement={column.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.rulesR.order,
    orderBy: state.rulesR.orderBy,
    columnData: state.rulesR.columnData,
    numSelected: state.rulesR.selected.length,
    rowCount: state.rulesR.rowCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchColumnData: () => dispatch(actions.fetchColumnData()),
    onSelectAllRules: checked => dispatch(actions.selectAllRules(checked)),
    onSortRuleTable: property => dispatch(actions.sortRuleTable(property))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleTableHead);
