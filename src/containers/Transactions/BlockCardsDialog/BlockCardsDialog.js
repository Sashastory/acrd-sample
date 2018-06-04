import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const styles = theme => ({});

class BlockCardsDialog extends Component {

    constructor(props) {
        super(props);
        this.state.cards = this.props.cards;
    }

    state = {
        cards: []
    };


    list = null;

    //TODO: Сохранение карт в списки
    saveHandler = () => {
        this.props.onClose(this.state.cards);
    };

    cancelHandler = () => {
        this.props.onClose();
    };

    render() {

        const {classes, cards, ...other} = this.props;

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth={"xs"}
                {...other}
            >
                <DialogTitle><Typography>Добавление карт в черный список</Typography></DialogTitle>
                <DialogContent>
                    <List>
                        {cards.map(card => (
                            <ListItem>
                                <ListItemText primary={card}/>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.saveHandler} color={"primary"}>Сохранить</Button>
                    <Button onClick={this.props.onClose} color={"primary"}>Отмена</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(BlockCardsDialog);