import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import * as actions from '../../../../store/actions/index';

class RuleTableHead extends Component {

    componentDidMount() {
        this.props.onFetchColumnData();
    }

    createSortHandler = property => event => {
        this.props.sortRuleTable(event, property);
    }

    onChangeAllClick = () => {
        //dispatch action
    }

    render() {

        const { columnData, order, orderBy, numSelected, rowCount } = this.props;
        
        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={this.onChangeAllClick} 
                        />
                        <TableCell>
                            {columnData.map(column => {
                                return (
                                    <TableCell
                                        key={column.id}
                                        numeric={column.numeric}
                                        padding={column.disablePadding ? 'none' : 'default'}
                                        sortDirection={orderBy === column.id ? order : false}
                                    >
                                        <Tooltip
                                            title="Сортировать"
                                            placement={column.numeric ? 'bottom-end' : 'bottom-start'}
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
                        </TableCell>
                    </TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.order,
        orderBy: state.orderBy,
        columnData: state.columnData,
        numSelected: state.numSelected,
        rowCount: state.rowCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchColumnData: () => dispatch(actions.fetchColumnData())
    }
}

export default connect(mapStateToProps)(RuleTableHead);