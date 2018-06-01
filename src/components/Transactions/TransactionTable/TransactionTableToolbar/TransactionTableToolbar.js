import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import {Tooltip} from "@material-ui/core";
import {connect} from "react-redux";

const styles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
        // backgroundColor: theme.palette.primary.light
    },
    highlight: {
        color: theme.palette.text.main,
        backgroundColor: theme.palette.secondary.main
    },
    actions: {
        color: theme.palette.text.secondary
    },
    spacer: {
        flex: "1 1 100%"
    },
    title: {
        flex: "0 0 auto"
    }
});

class TransactionTableToolbar extends Component {
    render() {
        const {numSelected, classes} = this.props;

        return (
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
                            Правила
                        </Typography>
                    )}
                </div>
                <div className={classes.spacer}/>
                <div className={classes.actions}>
                    {numSelected > 0 ? (
                        <Tooltip title="Удаление">
                            <IconButton aria-label="Удаление">
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Список фильтров">
                            <IconButton aria-label="Список фильтров">
                                <FilterListIcon/>
                            </IconButton>
                        </Tooltip>
                    )}
                </div>
            </Toolbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        numSelected: state.transactionsR.selected.length
    };
};

export default connect(mapStateToProps)(
    withStyles(styles)(TransactionTableToolbar)
);
