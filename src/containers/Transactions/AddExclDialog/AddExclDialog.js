import React, {Component} from 'react';
import Slide from '@material-ui/core/Slide';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import Icon from "@material-ui/core/es/Icon/Icon";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const styles = theme => ({
    attributes: {
        width: "100%"
    }
});

function Transition(props) {
    return <Slide direction={"up"} {...props} />
}

const attrCombos = [
    {
        label: "Card number + Terminal ID",
        value: {
            cardNumber: "",
            terminalId: ""
        }
    },
    {
        label: "Something else...",
        value: {}
    },
    {
        label: "Another one...",
        value: {}
    }
];

const attrComboChangeHandler = () => {


};

class AddExclDialog extends Component {

    state = {
        attributes: {},
        startDate: "",
        endDate: "",

    };

    render() {

        const {classes, transactions, open, onClose} = this.props;

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
                    <TextField
                        id={"attr-combo-field"}
                        select
                        label="Набор атрибутов:"
                        value={this.state.attributes}
                        className={classes.attributes}
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
                </DialogContent>
            </Dialog>
        );
    }
}

export default withStyles(styles)(AddExclDialog);