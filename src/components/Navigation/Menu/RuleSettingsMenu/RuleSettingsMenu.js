import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NavigationItem from "../../NavigationItem/NavigationItem";
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
        // backgroundColor: theme.palette.primary.dark
    }
});

class RuleSettingsMenu extends Component {
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
                    aria-owns={anchorEl ? "rule-settings-menu" : null}
                    aria-haspopup="true"
                    variant={"raised"}
                    className={classes.button}
                    onClick={this.onClickHandler}
                >
                    <Typography variant={"button"}>Настройка правил</Typography>
                    <Icon className={classes.rightIcon}>arrow_drop_down</Icon>
                </Button>
                <Menu
                    id="rule-settings-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.onCloseHandler}
                >
                    <MenuItem onClick={this.onCloseHandler} style={{textDecoration: "none"}}>
                        <NavigationItem link="/rules" style={{textDecoration: "none"}}>
                            Правила
                        </NavigationItem>
                    </MenuItem>
                    <MenuItem onClick={this.onCloseHandler}>Профили</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(RuleSettingsMenu);
