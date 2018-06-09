import React, {Component} from 'react';
import Slide from '@material-ui/core/Slide';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import Icon from "@material-ui/core/es/Icon/Icon";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const styles = theme => ({
    dialogContent: {
        display: "flex",
        flexDirection: "column",
        minWidth: "50%"
    },
    attrCombosField: {
        margin: theme.spacing.unit * 2
    },
    beginDateField: {
        margin: theme.spacing.unit * 2
    },
    endDateField: {
        margin: theme.spacing.unit * 2
    },
    cardNumberField: {
        margin: theme.spacing.unit * 2
    },
    terminalIdField: {
        margin: theme.spacing.unit * 2
    },
    attributes: {
        width: "100%"
    },
    dialogActions: {
        display: "flex"
    },
    listButtonsContainer: {
        display: "flex",
        justifyContent: "start",
    },
    whiteListButton: {
        marginLeft: theme.spacing.unit * 2
    },
    blackListButton: {
        marginLeft: theme.spacing.unit
    },
    cancelButtonContainer: {
        display: "flex",
        justifyContent: "end"
    },
    cancelButton: {
       marginRight: theme.spacing.unit * 2
    },
    cardNumTermIdFields: {
        display: "flex",
        flexDirection: "column"
    }
});

function Transition(props) {
    return <Slide direction={"up"} {...props} />
}

const attrCombos = [
    {
        label: "Card number + Terminal ID",
        value: 0
    },
    {
        label: "Something else...",
        value: 1
    },
    {
        label: "Another one...",
        value: 2
    }
];

class AddExclDialog extends Component {

    constructor(props) {
        super(props);
        this.state.transactions = this.props.transactions;
    }

    state = {
        attrCombosSelect: "",
        startDate: "",
        endDate: "",
        transactions: []

    };

    attrComboChangeHandler = (event) => {
        this.setState({
            attrCombosSelect: event.target.value
        });
    };

    //TODO: Реализация сохранения в белый список
    whiteListHandler = () => {
        this.props.onClose();
    };

    //TODO: Реализация сохранения в черный список
    blackListHandler = () => {
        this.props.onClose();
    };

    cancelHandler = () => {
        this.props.onClose();
    };

    render() {

        const {classes, open, onClose} = this.props;
        const {attrCombosSelect} = this.state;

        let cardNumberTerminalId = null;

        if (attrCombosSelect === 0) {
            cardNumberTerminalId = (
                <div className={classes.cardNumTermIdFields}>
                    <TextField
                        id={"card-number-field"}
                        label={"Номер карты:"}
                        disabled
                        value={"Topkek"}
                        className={classes.cardNumberField}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id={"terminalId-field"}
                        label={"ID терминала:"}
                        disabled
                        value={"Cheburek"}
                        className={classes.terminalIdField}
                        InputProps={{
                            shrink: true
                        }}
                    />
                </div>
            );
        }

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                TransitionComponent={Transition}
                open={open}
                onClose={onClose}
                className={classes.dialog}
            >
                <DialogTitle>
                    <Typography variant={"headline"}>Создание новой записи</Typography>
                </DialogTitle>
                <DialogContent>
                    <Paper className={classes.dialogContent}>
                        <TextField
                            id={"attr-combo-field"}
                            select
                            label="Набор атрибутов:"
                            className={classes.attrCombosField}
                            value={this.state.attrCombosSelect}
                            onChange={this.attrComboChangeHandler}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={"start"}>
                                        <Icon color={"primary"}>flag</Icon>
                                    </InputAdornment>
                                )
                            }}
                        >
                            {attrCombos.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id={"begin-date-field"}
                            label={"Начало действия:"}
                            type={"datetime-local"}
                            className={classes.beginDateField}
                            value={this.state.beginDate}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={"start"}>
                                        <Icon color={"primary"}>calendar_today</Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            id={"end-date-field"}
                            label={"Оконч. действия:"}
                            type={"datetime-local"}
                            className={classes.endDateField}
                            value={this.state.endDate}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={"start"}>
                                        <Icon color={"primary"}>calendar_today</Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {cardNumberTerminalId}
                    </Paper>
                </DialogContent>
                <DialogActions>
                    <div className={classes.dialogActions}>
                        <div className={classes.listButtonsContainer}>
                            <Button
                                onClick={this.whiteListHandler}
                                className={classes.whiteListButton}
                                color={"secondary"}
                                variant={"raised"}
                            >
                                В белый список
                            </Button>
                            <Button
                                onClick={this.blackListHandler}
                                className={classes.blackListButton}
                                color={"secondary"}
                                variant={"raised"}
                                disabled
                            >
                                В черный список
                            </Button>
                        </div>
                        <div className={classes.cancelButtonContainer}>
                            <Button
                                onClick={this.cancelHandler}
                                className={classes.cancelButton}
                                color={"default"}
                                variant={"raised"}
                            >
                                Отмена
                            </Button>
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(AddExclDialog);
