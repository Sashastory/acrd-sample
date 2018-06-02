import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing.unit
    },
    openButton: {
        display: "flex",
    },
    blockButton: {
        display: "flex",
    },
    addExclusionButton: {
        display: "flex"
    }
});

const TransactionTableControls = props => {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <Button className={classes.openButton} variant={"raised"}>
                <Typography variant={"button"}>Открыть выбранные</Typography>
            </Button>
            <Button className={classes.blockButton} variant={"raised"}>
                <Typography variant={"button"}>Заблокировать карту</Typography>
            </Button>
            <Button className={classes.addExclusionButton} variant={"raised"}>
                <Typography variant={"button"}>Добавить исключение</Typography>
            </Button>
        </div>
    );
};

export default withStyles(styles)(TransactionTableControls);
