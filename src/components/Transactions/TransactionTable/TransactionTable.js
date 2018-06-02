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
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    },
    table: {
        tableLayout: "fixed",
        whiteSpace: "nowrap"
    },
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

        const columnStyles = {
            id: {width: "1%", flexDirection: "inherit", textAlign: "center"},
            checkbox: {width: "4%", flexDirection: "inherit", textAlign: "center"},
            cardNumber: {width: "10%", flexDirection: "inherit", textAlign: "center"},
            dateTime: {width: "10%", flexDirection: "inherit", textAlign: "center"},
            otv: {width: "5%", flexDirection: "inherit", textAlign: "center"},
            amount: {width: "5%", flexDirection: "inherit", textAlign: "center"},
            currency: {width: "5%", flexDirection: "inherit", textAlign: "center"},
            operationCode: {width: "10%", flexDirection: "inherit", textAlign: "center"},
            rules: {width: "5%", flexDirection: "inherit", textAlign: "center"},
            score: {width: "5%", flexDirection: "inherit", textAlign: "center"},
            city: {width: "10%", flexDirection: "inherit", textAlign: "center"},
            category: {width: "6%", flexDirection: "inherit", textAlign: "center"},
            institute: {width: "5%", flexDirection: "inherit", textAlign: "center"},
            merchantName: {width: "10%", flexDirection: "inherit", textAlign: "center"},
            terminalId: {width: "10%", flexDirection: "inherit", textAlign: "center"},
        };

        const emptyRows =
            rowsPerPage -
            Math.min(rowsPerPage, transactions.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <TransactionTableToolbar/>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TransactionTableHead columnStyles={columnStyles}/>
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
                                            <TableCell padding="checkbox" className={styles.checkbox}>
                                                <Checkbox checked={isSelected}/>
                                            </TableCell>
                                            <TableCell className={styles.cardNumber}>
                                                <Typography variant={"body1"}>{trans.cardNumber}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.dateTime}>
                                                <Typography variant={"body1"}>{trans.dateTime}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.otv}>
                                                <Typography variant={"body1"}>{trans.otv}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.amount}>
                                                <Typography variant={"body1"}>{trans.amount}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.currency}>
                                                <Typography variant={"body1"}>{trans.currency}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.operationCode}>
                                                <Typography variant={"body1"}>{trans.operationCode}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.rules}>
                                                <Typography variant={"body1"}>{trans.rules}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.score}>
                                                <Typography variant={"body1"}>{trans.score}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.city}>
                                                <Typography variant={"body1"}>{trans.city}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.category}>
                                                <Typography variant={"body1"}>{trans.category}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.institute}>
                                                <Typography variant={"body1"}>{trans.institute}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.merchantName}>
                                                <Typography variant={"body1"}>{trans.merchantName}</Typography>
                                            </TableCell>
                                            <TableCell className={styles.terminalId}>
                                                <Typography variant={"body1"}>{trans.terminalId}</Typography>
                                            </TableCell>
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
