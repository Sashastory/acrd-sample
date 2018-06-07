import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import StepperActions from '../../../../components/Transactions/BlockCardsDialog/StepperActions/StepperActions';
import CardList from '../../../../components/Transactions/BlockCardsDialog/CardList/CardList';
import Duration from '../../../../components/Transactions/BlockCardsDialog/Duration/Duration';

const styles = theme => ({
    root: {},
    stepper: {
        color: theme.palette.secondary.main
    },
    cardsRoot: {},
    durationRoot: {},
    rulesRoot: {},
    listContainer: {},
    durationContainer: {},
    daysContainer: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    },
    specialContainer: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    },
    rulesContainer: {},
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2
    },
    resetContainer: {},
    button: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    },
    listItemIcon: {
        color: theme.palette.primary.main
    },
    twoDaysSwitch: {
        marginLeft: theme.spacing.unit * 3
    },
    dateBeforeField: {
        marginLeft: theme.spacing.unit
    },
    dateAfterField: {}
});

const steps = ['Подтверждение карт', 'Выбор времени действия', 'Выбор правил'];

class BlockDialogStepper extends Component {

    constructor(props) {
        super(props);
        this.state.confirmed = this.props.cards.map(card => {
            return {cardNumber: card, checked: true};
        });
    }

    state = {
        activeStep: 0,
        finished: false,
        //TODO: Транзакции целиком или только номера карт? Сейчас это пары номер карты - выбрана или нет
        confirmed: [],
        duration: {
            dayAmount: 0,
            twoDays: false,
            special: {
                dateAfter: "",
                dateBefore: ""
            }
        },

        //TODO: Должны подтягиваться из таблицы?
        rules: {},
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        }, () => {
            if (this.state.activeStep === steps.length) {
                this.props.handler(true);
            }
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    };

    handleReset = () => {

        const initialConfirmed = [...this.state.confirmed];
        initialConfirmed.map(c => c.checked === true);

        const initialDuration = {...this.state.duration};
        initialDuration.dayAmount = 0;
        initialDuration.twoDays = false;
        initialDuration.special.dateAfter = "";
        initialDuration.special.dateBefore = "";

        //TODO: Сброс правил

        this.setState({
            activeStep: 0,
            finished: false,
            confirmed: initialConfirmed,
            duration: initialDuration,
        }, () => {
            this.props.handler(false);
        })
    };

    handleToggle = (card) => {

        const {confirmed} = this.state;
        const newConfirmed = [...confirmed];

        newConfirmed.find(c => c.cardNumber === card.cardNumber).checked = !card.checked;

        this.setState({
            confirmed: newConfirmed
        });
    };

    handleChange = () => {

        const {duration} = this.state;
        const newDuration = {...duration};
        newDuration.twoDays = !duration.twoDays;

        this.setState({
            duration: newDuration
        });
    };

    handleDayAmountChange = (event) => {

        const updatedState = {...this.state};
        updatedState.duration.dayAmount = event.target.value;

        this.setState({
            state: updatedState
        });
    };

    handleDateChange = name => event => {

        const {duration} = this.state;
        const newDuration = {...duration};

        newDuration[name] = event.target.value;

        this.setState({
            duration: newDuration
        });
    };

    render() {

        const {classes} = this.props;
        const {activeStep, confirmed, duration} = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation={"vertical"} className={classes.stepper}>
                    <Step key={steps[0]}>
                        <StepLabel>{steps[0]}</StepLabel>
                        <StepContent>
                            <div className={classes.cardsRoot}>
                                <CardList
                                    listContainer={classes.listContainer}
                                    confirmed={confirmed}
                                    listItemIcon={classes.listItemIcon}
                                    onToggle={this.handleToggle}
                                />
                                <StepperActions
                                    actionsContainer={classes.actionsContainer}
                                    button={classes.button}
                                    onClickNext={this.handleNext}
                                    onClickBack={this.handleBack}
                                    activeStep={activeStep}
                                    steps={steps}
                                />
                            </div>
                        </StepContent>
                    </Step>
                    <Step key={steps[1]}>
                        <StepLabel>{steps[1]}</StepLabel>
                        <StepContent>
                            <div className={classes.durationRoot}>
                                <Duration
                                    durationContainer={classes.durationContainer}
                                    daysContainer={classes.daysContainer}
                                    specialContainer={classes.specialContainer}
                                    dayAmount={duration.dayAmount}
                                    onChangeDayAmount={this.handleDayAmountChange}
                                    twoDays={duration.twoDays}
                                    onChange={this.handleChange}
                                    twoDaysSwitch={classes.twoDaysSwitch}
                                    iconStyle={classes.iconStyle}
                                    dateAfter={duration.special.dateAfter}
                                    dateAfterField={classes.dateAfterField}
                                    dateBefore={duration.special.dateBefore}
                                    dateBeforeField={classes.dateBeforeField}
                                    onDateChange={this.handleDateChange}
                                />
                                <StepperActions
                                    actionsContainer={classes.actionsContainer}
                                    button={classes.button}
                                    onClickNext={this.handleNext}
                                    onClickBack={this.handleBack}
                                    activeStep={activeStep}
                                    steps={steps}
                                />
                            </div>
                        </StepContent>
                    </Step>
                    <Step key={steps[2]}>
                        <StepLabel>{steps[2]}</StepLabel>
                        <StepContent>
                            <div className={classes.rulesRoot}>
                                <div className={classes.rulesContainer}>
                                    <Typography variant={"headline"}>Сюда подгружаются правила</Typography>
                                </div>
                                <StepperActions
                                    actionsContainer={classes.actionsContainer}
                                    button={classes.button}
                                    onClickNext={this.handleNext}
                                    onClickBack={this.handleBack}
                                    activeStep={activeStep}
                                    steps={steps}
                                />
                            </div>
                        </StepContent>
                    </Step>
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>Все шаги успешно выполнены!</Typography>
                        <Button
                            variant={"raised"}
                            onClick={this.handleReset}
                            className={classes.button}
                        >
                            <Typography variant={"button"}>Сбросить</Typography>
                        </Button>
                    </Paper>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(BlockDialogStepper);