import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import BlockCardsStepper from './BlockDialogStepper/BlockDialogStepper';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    dialog: {}
});

function Transition(props) {
    return <Slide direction={"up"} {...props} />
}

class BlockCardsDialog extends Component {

    state = {
        stepsComplete: false
    };


    list = null;

    //TODO: Сохранение карт в списки
    saveHandler = () => {
        this.props.onClose();
    };

    cancelHandler = () => {
        this.props.onClose();
    };

    stepsCompleteHandler = (value) => {
        this.setState({
            stepsComplete: value
        });
    };

    render() {

        const {classes, cards, open, onClose} = this.props;

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
                    <Typography variant={"headline"}>
                        Добавление карт в черный список
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <BlockCardsStepper
                        cards={cards}
                        handler={this.stepsCompleteHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.saveHandler}
                        color={"secondary"}
                        variant={"raised"}
                        disabled={!this.state.stepsComplete}
                    >
                        Сохранить
                    </Button>
                    <Button
                        onClick={this.cancelHandler}
                        color={"default"}
                        variant={"raised"}
                    >
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(BlockCardsDialog);