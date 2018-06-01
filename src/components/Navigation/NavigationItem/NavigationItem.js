import React from "react";
import {NavLink} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    item: {
        textDecoration: "none"
    },
    active: {}
});

const navigationItem = props => {

    const {classes} = props;

    return (
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}
        >
            {props.children}
        </NavLink>
    );
};

export default withStyles(styles)(navigationItem);
