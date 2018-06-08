import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';
import LaunchIcon from '@material-ui/icons/Launch';
import LockIcon from '@material-ui/icons/Lock';
import WorkIcon from '@material-ui/icons/Work';
import {connect} from "react-redux";
import Button from "@material-ui/core/es/Button/Button";
import BlockCardsDialog from '../../../../containers/Transactions/BlockCardsDialog/BlockCardsDialog';
import AddExclDialog from '../../../../containers/Transactions/AddExclDialog/AddExclDialog';


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: "space-between",
        paddingRight: theme.spacing.unit,
    },
    dialog: {
        width: "80%",
        maxHeight: 500
    },
    highlight: {
        color: "#000",
        backgroundColor: theme.palette.secondary.main
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        color: theme.palette.text.secondary,
        width: "50%"
    },
    title: {
        flex: "0 0 auto"
    },
    icon: {
        marginRight: theme.spacing.unit,
    },
    actionButton: {}
});

class TransactionTableToolbar extends Component {

    state = {
        blockDialogOpen: false,
        addExclDialogOpen: false,
    };

    blockDialogCloseHandler = () => {
        this.setState({
            blockDialogOpen: false
        })
    };

    blockDialogOpenHandler = () => {
        this.setState({
            blockDialogOpen: true
        });
    };

    addExclDialogCloseHandler = () => {
        this.setState({
            addExclDialogOpen: false
        })
    };

    addExclDialogOpenHandler = () => {
        this.setState({
            addExclDialogOpen: true
        })
    };

    render() {

        const {onOpenClick, onBlockClick, onAddExclClick, selected, classes} = this.props;

        const numSelected = selected.length;

        const iconFragment = (
            <React.Fragment>
                <IconButton disabled={numSelected <= 0} aria-label="Открыть">
                    <LaunchIcon color={"inherit"}/>
                </IconButton>
                <IconButton
                    disabled={numSelected <= 0}
                    aria-label="Заблокировать"
                    onClick={this.blockDialogOpenHandler}
                >
                    <LockIcon color={"inherit"}/>
                </IconButton>
                <IconButton
                    disabled={numSelected <= 0}
                    aria-label="Доб исключение"
                    onClick={this.addExclDialogOpenHandler}
                >
                    <WorkIcon color={"inherit"}/>
                </IconButton>
            </React.Fragment>
        );

        const buttonFragment = (
            <React.Fragment>
                <Button
                    variant={"raised"}
                    onClick={onOpenClick}
                    color={"primary"}
                    className={classes.actionButton}
                >
                    <Icon className={classes.icon} color={"secondary"}>launch</Icon>
                    <Typography variant={"button"}>Открыть</Typography>
                </Button>
                <Button
                    variant={"raised"}
                    onClick={onBlockClick}
                    color={"primary"}
                    className={classes.actionButton}
                >
                    <Icon className={classes.icon} color={"secondary"}>lock</Icon>
                    <Typography variant={"button"}>Заблокировать</Typography>
                </Button>
                <Button
                    variant={"raised"}
                    onClick={onAddExclClick}
                    color={"primary"}
                    className={classes.actionButton}
                >
                    <Icon className={classes.icon} color={"secondary"}>work</Icon>
                    <Typography variant={"button"}>Доб исключение</Typography>
                </Button>
            </React.Fragment>
        );

        return (
            <div>
                <Toolbar
                    className={classNames(classes.root, {
                        [classes.highlight]: numSelected > 0
                    })}
                >
                    <div className={classes.title}>
                        {numSelected > 0 ? (
                            <Typography color="inherit" variant="subheading">
                                {numSelected} выбрано
                            </Typography>
                        ) : (
                            <Typography variant="title" id="tableTitle" color={"inherit"}>
                                Транзакции
                            </Typography>
                        )}
                    </div>
                    <div className={classes.actions}>
                        {/*{iconFragment}*/}
                        {numSelected > 0 ? iconFragment : null}
                    </div>
                </Toolbar>
                <BlockCardsDialog
                    cards={selected.map(trans => trans.cardNumber)}
                    open={this.state.blockDialogOpen}
                    onClose={this.blockDialogCloseHandler}
                />
                <AddExclDialog
                    transactions={selected}
                    open={this.state.addExclDialogOpen}
                    onClose={this.addExclDialogCloseHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selected: state.transactionsR.selected,
    };
};

export default connect(mapStateToProps)(
    withStyles(styles)(TransactionTableToolbar)
);
