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
        color: theme.palette.secondary.main
    },
    dateBeforeField: {
    },
    dateAfterField: {
    }
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
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    };

    handleReset = () => {

        //Сброс подтвержденных карт
        const initialConfirmed = [...this.state.confirmed];
        initialConfirmed.map(c => c.checked === true);

        //TODO: Сброс интервала времени
        //TODO: Сброс правил

        this.setState({
            activeStep: 0,
            confirmed: initialConfirmed
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
        console.log(`Duration before update ${newDuration.twoDays}`);
        newDuration.twoDays = !duration.twoDays;
        console.log(`Duration after update ${newDuration.twoDays}`);

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
                                <div className={classes.listContainer}>
                                    <List subheader={<ListSubheader>Список карт</ListSubheader>}>
                                        {confirmed.map(card => (
                                            <ListItem key={card.cardNumber}>
                                                <ListItemIcon className={classes.listItemIcon}>
                                                    <CreditCardIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary={card.cardNumber}/>
                                                <ListItemSecondaryAction>
                                                    <Switch
                                                        onChange={() => this.handleToggle(card)}
                                                        checked={this.state.confirmed
                                                            .find(c => c.cardNumber === card.cardNumber).checked}
                                                    />
                                                </ListItemSecondaryAction>
                                                <Divider/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        variant={"raised"}
                                        color={"secondary"}
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ?
                                            <Typography variant={"button"}>Завершить</Typography> :
                                            <Typography variant={"button"}>Далее</Typography>}
                                    </Button>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        <Typography variant={"button"}>Назад</Typography>
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step key={steps[1]}>
                        <StepLabel>{steps[1]}</StepLabel>
                        <StepContent>
                            <div className={classes.durationRoot}>
                                <div className={classes.durationContainer}>
                                    <div className={classes.daysContainer}>
                                        <TextField
                                            id={"day-amount-field"}
                                            label="Кол-во дней:"
                                            value={this.state.duration.dayAmount}
                                            onChange={this.handleDayAmountChange}
                                            disabled={this.state.duration.twoDays}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                        />
                                        <FormControlLabel control={
                                            <Switch
                                                checked={this.state.duration.twoDays === true}
                                                onChange={this.handleChange}
                                            />
                                        } label={"2 дня"}/>
                                    </div>
                                    <div className={classes.specialContainer}>
                                        <TextField
                                            id={"date-after-field"}
                                            label={"Специальное, От:"}
                                            type={"date"}
                                            disabled={this.state.duration.twoDays}
                                            value={this.state.dateAfter}
                                            className={classes.dateAfterField}
                                            onChange={this.handleDateChange('dateAfter')}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position={"start"}>
                                                        <Icon color={"secondary"} className={classes.iconStyle}>calendar_today</Icon>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <TextField
                                            id={"date-until-field"}
                                            label={"До:"}
                                            type={"datetime-local"}
                                            disabled={this.state.duration.twoDays}
                                            value={this.state.dateBefore}
                                            className={classes.dateBeforeField}
                                            onChange={this.handleDateChange('dateBefore')}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position={"start"}>
                                                        <Icon color={"secondary"} className={classes.iconStyle}>calendar_today</Icon>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        variant={"raised"}
                                        color={"secondary"}
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ?
                                            <Typography variant={"button"}>Завершить</Typography> :
                                            <Typography variant={"button"}>Далее</Typography>}
                                    </Button>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        <Typography variant={"button"}>Назад</Typography>
                                    </Button>
                                </div>
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
                                <div className={classes.actionsContainer}>
                                    <Button
                                        variant={"raised"}
                                        color={"secondary"}
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ?
                                            <Typography variant={"button"}>Завершить</Typography> :
                                            <Typography variant={"button"}>Далее</Typography>}
                                    </Button>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        <Typography variant={"button"}>Назад</Typography>
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>Все шаги успешно выполнены!</Typography>
                        <Button onClick={this.handleReset} className={classes.button}>
                            <Typography variant={"button"}>Сбросить</Typography>
                        </Button>
                    </Paper>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(BlockDialogStepper);