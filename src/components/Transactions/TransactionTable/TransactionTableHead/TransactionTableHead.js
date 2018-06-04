import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import Typography from '@material-ui/core/Typography'
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import * as actions from "../../../../store/actions/index";

const styles = theme => ({
    tableHead: {
        width: "1px",
        whiteSpace: "nowrap",
        backgroundColor: theme.palette.primary.dark
    },
    tableRow: {},
    tableCell: {
        width: "4%"
    },
    checkbox: {
        color: "#000"
    }

});

const columnData = [
    {
        id: "id",
        numeric: true,
        disablePadding: true,
        label: "ID",
    },
    {
        cardNumber: "cardNumber",
        numeric: false,
        disablePadding: false,
        label: "Номер карты",
    },
    {
        datetime: "dateTime",
        numeric: false,
        disablePadding: false,
        label: "Дата время",
    },
    {
        otv: "otv",
        numeric: true,
        disablePadding: false,
        label: "ОТВ",
        style: {
            width: "7%"
        }
    },
    {
        amount: "amount",
        numeric: true,
        disablePadding: false,
        label: "Сумма",
    },
    {
        currency: "currency",
        numeric: true,
        disablePadding: false,
        label: "Валюта",
    },
    {
        countryCode: "countryCode",
        numeric: false,
        disablePadding: false,
        label: "Код страны"
    },
    {
        rules: "rules",
        numeric: true,
        disablePadding: false,
        label: "Правила",
    },
    {
        score: "score",
        numeric: true,
        disablePadding: false,
        label: "Оценка",
    },
    {
        city: "city",
        numeric: false,
        disablePadding: false,
        label: "Город",
    },
    {
        category: "category",
        numeric: true,
        disablePadding: false,
        label: "Категория",
    },
    {
        institute: "institute",
        numeric: true,
        disablePadding: false,
        label: "Институт",
    },
    {
        merchantName: "merchantName",
        numeric: false,
        disablePadding: false,
        label: "Имя мерчанта",
    },
    {
        terminalId: "terminalId",
        numeric: true,
        disablePadding: false,
        label: "ID терминала",
    }
];

class TransactionTableHead extends Component {
    createSortHandler = property => event => {
        this.props.onSortTransactionTable(property);
    };

    onSelectAllTransactions = (event, checked) => {
        this.props.onSelectAllTransactions(checked);
    };

    render() {

        const {classes, order, orderBy, numSelected, rowCount, columnStyles} = this.props;
        return (
            <TableHead className={classes.tableHead}>
                <TableRow className={classes.tableRow}>
                    <TableCell padding="checkbox" className={classes.tableCell}>
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={this.onSelectAllTransactions}
                            className={classes.checkbox}
                        />
                    </TableCell>
                    {columnData.map((column, index) => {
                        if (index !== 0) {
                            return (
                                <TableCell
                                    key={column.id}
                                    numeric={column.numeric}
                                    padding={column.disablePadding ? "none" : "default"}
                                    sortDirection={orderBy === column.id ? order : false}
                                    style={columnStyles[Object.keys(column)[0]]}
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
                                            <Typography variant={"body2"}>{column.label}</Typography>
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                            );
                        }
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.transactionsR.order,
        orderBy: state.transactionsR.orderBy,
        numSelected: state.transactionsR.selected.length,
        rowCount: state.transactionsR.rowCount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectAllTransactions: checked =>
            dispatch(actions.selectAllTransactions(checked)),
        onSortTransactionTable: property =>
            dispatch(actions.sortTransactionTable(property))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(TransactionTableHead)
);
