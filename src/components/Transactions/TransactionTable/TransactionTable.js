import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import {connect} from "react-redux";
import * as actions from "../../../store/actions/index";
import TransactionTableHead from "../TransactionTable/TransactionTableHead/TransactionTableHead";
import TransactionTableToolbar from "../TransactionTable/TransactionTableToolbar/TransactionTableToolbar";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    },
    table: {},
    tableCell: {
        flexDirection: "inherit"
    },
    tableWrapper: {
        overflowX: "auto"
    }
});

class TransactionTable extends Component {

    componentDidMount() {
        this.props.onFetchTransactions();
    }

    state = {
        page: 0,
        rowsPerPage: 10
    };

    pageChangeHandler = (event, page) => {
        this.setState({page});
    };

    rowsPerPageChangeHandler = event => {
        this.setState({
            rowsPerPage: event.target.value
        });
    };

    transTableRowClickHandler = (event, trans) => {
        this.props.onChangeSelectedTransactionAmount(trans.id);
    };

    isSelected = id => this.props.selected.indexOf(id) !== -1;

    render() {
        const {transactions, classes} = this.props;
        const {page, rowsPerPage} = this.state;
        const emptyRows =
            rowsPerPage -
            Math.min(rowsPerPage, transactions.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <TransactionTableToolbar/>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TransactionTableHead/>
                        <TableBody>
                            {transactions
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(trans => {
                                    const isSelected = this.isSelected(trans.id);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={event =>
                                                this.transTableRowClickHandler(event, trans)
                                            }
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={trans.id}
                                            selected={isSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={isSelected}/>
                                            </TableCell>
                                            <TableCell>{trans.cardNumber}</TableCell>
                                            <TableCell>{trans.dateTime}</TableCell>
                                            <TableCell>{trans.otv}</TableCell>
                                            <TableCell>{trans.amount}</TableCell>
                                            <TableCell>{trans.currency}</TableCell>
                                            <TableCell>{trans.operationCode}</TableCell>
                                            <TableCell>{trans.rules}</TableCell>
                                            <TableCell>{trans.score}</TableCell>
                                            <TableCell>{trans.city}</TableCell>
                                            <TableCell>{trans.category}</TableCell>
                                            <TableCell>{trans.institute}</TableCell>
                                            <TableCell>{trans.merchantName}</TableCell>
                                            <TableCell>{trans.terminalId}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{height: 49 * emptyRows}}>
                                    <TableCell colSpan={14}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    count={transactions.length}
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
        transactions: state.transactionsR.transactions,
        order: state.transactionsR.order,
        selected: state.transactionsR.selected,
        orderBy: state.transactionsR.orderBy,
        loading: state.transactionsR.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTransactions: () => dispatch(actions.fetchTransactions()),
        onChangeSelectedTransactionAmount: selectedId =>
            dispatch(actions.changeSelectedTransactionAmount(selectedId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(TransactionTable)
);
