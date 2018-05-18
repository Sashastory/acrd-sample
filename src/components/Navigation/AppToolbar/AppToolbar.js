import React, {Component} from 'react';
import classes from './AppToolbar.css';
import FlatButton from 'material-ui/FlatButton';
import {red500, blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


class AppToolbar extends Component {

    render() {

        const styles = {
            toolbarStyle: {
                justifyContent: 'flex-end'
            }

        };

        return (
            <Toolbar style={styles.toolbarStyle}>
                <ToolbarGroup firstChild={true} className={classes.FirstToolbarGroup}>
                    <ToolbarTitle text="ACRD-Sample"/>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <ToolbarSeparator/>
                    <FlatButton
                        label="Помощь"
                        labelPosition="right"
                        icon={<FontIcon className="material-icons" color={blue500}>help</FontIcon>}
                    />
                    <ToolbarSeparator/>
                    <FlatButton
                        label="Выход"
                        labelPosition="right"
                        icon={<FontIcon className="material-icons" color={red500}>exit_to_app</FontIcon>}
                    />
                    <ToolbarTitle/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default AppToolbar;