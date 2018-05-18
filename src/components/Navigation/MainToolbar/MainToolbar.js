import React, {Component} from 'react';
import classes from './MainToolbar.css';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {blue500} from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class MainToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 4
        }
    }

    handleDropDown = (event, index, value) => this.setState({value: value});

    render() {

        const styles = {
            toolbarStyle: {
                backgroundColor: blue500
            }
        }

        return (
            <Toolbar style={styles.toolbarStyle}>
                <ToolbarGroup>
                    <DropDownMenu value={this.state.value} onChange={this.handleDropDown} className={classes.DropDownMenu}>
                        <MenuItem value={1} primaryText="Мониторинг и Уведомления"/>
                        <MenuItem value={2} primaryText="Мониторинг мошенничества"/>
                        <MenuItem value={3} primaryText="Эмиссия"/>
                        <MenuItem value={4} primaryText="Правила"/>
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton
                        label="Фронтальная система"
                        labelPosition="right"
                        icon={<FontIcon className="material-icons">computer</FontIcon>}
                    />
                    <RaisedButton
                        label="Бэк-офисная система"
                        labelPosition="right"
                        icon={<FontIcon className="material-icons">storage</FontIcon>}
                    />
                    <RaisedButton
                        label="Отчеты"
                        labelPosition="right"
                        icon={<FontIcon className="material-icons">folder</FontIcon>}
                    />
                    <RaisedButton
                        label="Системный мониторинг"
                        labelPosition="right"
                        icon={<FontIcon className="material-icons">settings_system_daydream</FontIcon>}
                    />
                    <RaisedButton
                        label="Администрирование"
                        labelPosition="right"
                        icon={<FontIcon className="material-icons">settings</FontIcon>}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default MainToolbar;