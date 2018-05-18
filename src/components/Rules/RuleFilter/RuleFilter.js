import React, {Component} from 'react';
import classes from './RuleFilter.css';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {blue500, yellow500} from 'material-ui/styles/colors';

class RuleFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ruleId: '',
            minExpDate: '',
            maxExpDate: '',
            description: ''
        }
    }

    onRuleIdChangeHandler = (event) => {
        this.setState({
            ruleId: event.target.value
        });
    };

    onMinExpDateChangeHandler = (event, date) => {
        this.setState({
            minExpDate: date
        });
    };

    onMaxExpDateChangeHandler = (event, date) => {
        this.setState({
            maxExpDate: date
        })
    };

    onDescriptionChangeHandler = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    onSearchClickHandler = () => {
        console.log("Performing datasource search....");
    };

    onClearClickHandler = () => {
        this.setState({
            ruleId: '',
            minExpDate: '',
            maxExpDate: '',
            description: ''
        });
    };

    render() {
        //AutoComplete instead of TextField using Datasource?

        return (
            <div>
                <div className={classes.RuleFilter}>
                    <div style={{marginLeft: '20px'}}>
                        <p>ID правила:</p>
                        <TextField
                            value={this.state.ruleId}
                            onChange={(event) => this.onRuleIdChangeHandler(event)}/>
                    </div>

                    <div>
                        <FontIcon className="material-icons" color={yellow500}>calendar_today</FontIcon>
                        <p>Мин. дата окончания</p>
                        <DatePicker
                            format="24hr"
                            okLabel="ОК"
                            cancelLabel="Отмена"
                            locale="ru"
                            value={this.state.minExpDate}
                            onChange={this.onMinExpDateChangeHandler}/>
                    </div>

                    <div>
                        <FontIcon className="material-icons" color={yellow500}>calendar_today</FontIcon>
                        <p>Макс дата окончания</p>
                        <DatePicker
                            format="24hr"
                            value={this.state.maxExpDate}
                            onChange={this.onMaxExpDateChangeHandler}/>
                    </div>

                    <div>
                        <p>Описание</p>
                        <TextField
                            value={this.state.description}
                            onChange={(event) => this.onDescriptionChangeHandler(event)}/>
                    </div>
                </div>
                <div>
                    <RaisedButton
                        label="Найти"
                        style={{marginRight: '10px'}}
                        backgroundColor={blue500}
                        onClick={this.onSearchClickHandler}/>
                    <RaisedButton
                        label="Cбросить"
                        onClick={this.onClearClickHandler}/>
                </div>
            </div>
        );
    }
}

export default RuleFilter;