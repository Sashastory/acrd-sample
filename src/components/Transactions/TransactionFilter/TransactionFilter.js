import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import moment from 'moment';
import * as actions from '../../../store/actions/index';
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    searchFields: {
        display: "flex",
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    filtersPanel: {
        display: "flex",
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    panel: {
        backgroundColor: theme.palette.primary.main
    },
    panelSummary: {
    },
    panelDetails: {
        display: "flex",
        flexDirection: "column"
    },
    transFilterButtons: {
        display: "flex",
        marginLeft: theme.spacing.unit * 3,
    },
    iconStyle: {},
    cardNumberField: {
        marginRight: theme.spacing.unit * 2,
    },
    dateAfterField: {
        marginRight: theme.spacing.unit * 2
    },
    dateBeforeField: {
        marginRight: theme.spacing.unit * 2
    },
    flagField: {
        marginRight: theme.spacing.unit * 2
    },
    merchantNameField: {
        marginTop: theme.spacing.unit ,
        marginBottom: theme.spacing.unit
    },
    terminalIdField: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    },
    countryCodeField: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    },
    terminalTypeField: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    }
});

const flags = [
    {
        label: "SUSPECT",
        value: 1
    },
    {
        label: "FRAUD",
        value: 2
    },
    {
        label: "HAS RULES",
        value: 3
    }
];

const countryCodes = [
    { label: "AD - ANDORRA", value: "AD"},
    { label: "AE - UNITED ARAB EMIRATES", value: "AE"},
    { label: "AF - AFGHANISTAN", value: "AF"}
];

const terminalTypes = [
    { label: "1 - ATM terminal", value: 1},
    { label: "8 - E-Pos terminal", value: 8},
    { label: "6 - Host terminal", value: 6}
];

class TransactionFilter extends Component {

    state = {
        cardNumber: "",
        dateAfter: moment().format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS),
        dateBefore: moment().format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS),
        flag: "",
        merchantName: "",
        terminalId: "",
        countryCode: "",
        terminalType: ""
    };

    fieldChangeHandler = name => event => {

        console.log(event.target.value);

        this.setState({
            [name]: event.target.value
        });

        this.props.onFilterTransactionTable(name, event.target.value);

    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.searchFields}>
                    <TextField
                        id={"card-number-field"}
                        label={"Номер карты:"}
                        value={this.state.cardNumber}
                        className={classes.cardNumberField}
                        onChange={this.fieldChangeHandler("cardNumber")}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <Icon color={"primary"} className={classes.iconStyle}>credit_card</Icon>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        id={"date-from-field"}
                        label={"C:"}
                        type={"datetime-local"}
                        value={this.state.dateAfter}
                        className={classes.dateAfterField}
                        onChange={this.fieldChangeHandler("dateAfter")}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <Icon color={"primary"} className={classes.iconStyle}>calendar_today</Icon>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        id={"date-until-field"}
                        label={"По:"}
                        type={"datetime-local"}
                        value={this.state.dateBefore}
                        className={classes.dateBeforeField}
                        onChange={this.fieldChangeHandler("dateBefore")}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <Icon color={"primary"} className={classes.iconStyle}>calendar_today</Icon>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        id={"flag-field"}
                        select
                        label="Флаг:"
                        value={this.state.flag}
                        className={classes.flagField}
                        onChange={this.fieldChangeHandler("flag")}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <Icon color={"primary"} className={classes.iconStyle}>flag</Icon>
                                </InputAdornment>
                            )
                        }}
                    >
                        {flags.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className={classes.filtersPanel}>
                    <ExpansionPanel className={classes.panel}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} className={classes.panelSummary}>
                            <Typography variant={"subheading"} color={"inherit"}>
                                Дополнительные фильтры
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.panelDetails}>
                            <TextField
                                id={"merchant-name-field"}
                                label={"Имя мерчанта:"}
                                value={this.state.merchantName}
                                className={classes.merchantNameField}
                                onChange={this.fieldChangeHandler("merchantName")}
                                /*InputProps={{
                                    startAdornment: (
                                        <InputAdornment position={"start"}>
                                            <Icon color={"primary"} className={classes.iconStyle}>credit_card</Icon>
                                        </InputAdornment>
                                    )
                                }}*/
                            />
                            <TextField
                                id={"terminal-id-field"}
                                label={"ID терминала:"}
                                value={this.state.terminalId}
                                className={classes.terminalIdField}
                                onChange={this.fieldChangeHandler("terminalId")}
                                /*InputProps={{
                                    startAdornment: (
                                        <InputAdornment position={"start"}>
                                            <Icon color={"primary"} className={classes.iconStyle}>credit_card</Icon>
                                        </InputAdornment>
                                    )
                                }}*/
                            />
                            <TextField
                                id={"country-code-field"}
                                select
                                label="Код страны:"
                                value={this.state.countryCode}
                                className={classes.countryCodeField}
                                onChange={this.fieldChangeHandler("countryCode")}
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position={"start"}>
                                //             <Icon color={"primary"} className={classes.iconStyle}>flag</Icon>
                                //         </InputAdornment>
                                //     )
                                // }}
                            >
                                {countryCodes.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id={"terminal-type-field"}
                                select
                                label="Тип терминала:"
                                value={this.state.terminalType}
                                className={classes.terminalTypeField}
                                onChange={this.fieldChangeHandler("terminalType")}
                                /*InputProps={{
                                    startAdornment: (
                                        <InputAdornment position={"start"}>
                                            <Icon color={"primary"} className={classes.iconStyle}>flag</Icon>
                                        </InputAdornment>
                                    )
                                }}*/
                            >
                                {terminalTypes.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterTransactionTable: (filter, value) => dispatch(actions.filterTransactionTable(filter, value))
    }
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(TransactionFilter));
