import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit
    },
    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    }
});

class ListMenu extends Component {
    state = {
        anchorEl: null
    };

    onClickHandler = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    onCloseHandler = () => {
        this.setState({
            anchorEl: null
        });
    };

    render() {
        const {anchorEl} = this.state;
        const {classes} = this.props;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? "list-menu" : null}
                    aria-haspopup="true"
                    variant={"raised"}
                    className={classes.button}
                    onClick={this.onClickHandler}
                >
                    <Typography variant={"button"}>Справочники</Typography>
                    <Icon className={classes.rightIcon}>arrow_drop_down</Icon>
                </Button>
                <Menu
                    id="list-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.onCloseHandler}
                >
                    <MenuItem onClick={this.onCloseHandler}>Черные списки</MenuItem>
                    <MenuItem onClick={this.onCloseHandler}>Белые списки</MenuItem>
                    <MenuItem onClick={this.onCloseHandler}>Расширяемые спики</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(ListMenu);
