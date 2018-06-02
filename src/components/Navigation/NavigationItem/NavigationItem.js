import React from "react";
import {NavLink} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    link: {
        textDecoration: "none",
    }
});

const navigationItem = props => {

    const {classes} = props;

    return (
        <NavLink
            to={props.link}
            exact={props.exact}
            className={classes.link}
        >
            {props.children}
        </NavLink>
    );
};

export default withStyles(styles)(navigationItem);
