import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import {withStyles} from "@material-ui/core/styles";
import NavigationItem from '../../../Navigation/NavigationItem/NavigationItem';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit
    },
    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        // backgroundColor: theme.palette.primary.main
    }
});

class NotificationMenu extends Component {
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
                    aria-owns={anchorEl ? "notification-menu" : null}
                    aria-haspopup="true"
                    variant={"raised"}
                    className={classes.button}
                    onClick={this.onClickHandler}
                >
                    <Typography variant={"button"}>Обработка событий</Typography>
                    <Icon className={classes.rightIcon}>arrow_drop_down</Icon>
                </Button>
                <Menu
                    id="notification-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.onCloseHandler}
                >
                    <MenuItem onClick={this.onCloseHandler}>
                        <NavigationItem link="/transactions">
                            События
                        </NavigationItem>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(NotificationMenu);
