import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotificationMenu from "../Menu/NotificationMenu/NotificationMenu";
import RuleSettingsMenu from "../Menu/RuleSettingsMenu/RuleSettingsMenu";
import ListMenu from "../Menu/ListMenu/ListMenu";
import AdministrationMenu from "../Menu/AdministrationMenu/AdministrationMenu";
import NavigationItem from "../NavigationItem/NavigationItem";

const styles = theme => ({
    root: {
        marginBottom: theme.spacing.unit * 2
    },
    toolbar: {
        display: "flex",
        justifyContent: "center"
    },
    appBar: {
        backgroundColor: theme.palette.primary.dark
    },
    mainButton: {
        marginRight: theme.spacing.unit * 5,
        backgroundColor: theme.palette.secondary.main,
    },
    typography: {
        color: "#000"
    }
});

const appToolbar = props => {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position={"static"} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Button
                        aria-haspopup="false"
                        variant={"raised"}
                        className={classes.mainButton}
                    >
                        <NavigationItem link="/">
                            <Typography variant={"button"} className={classes.typography}>Главная</Typography>
                        </NavigationItem>
                    </Button>
                    <NotificationMenu/>
                    <RuleSettingsMenu/>
                    <ListMenu/>
                    <AdministrationMenu/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(appToolbar);
