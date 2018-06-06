import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

const styles = theme => ({
    root: {
        width: "90%"
    },
    cardsRoot: {},
    durationRoot: {},
    rulesRoot: {},
    listContainer: {},
    durationContainer: {},
    rulesContainer: {},
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2
    },
    resetContainer: {},
    button: {}
});

const steps = ['Подтверждение карт', 'Выбор времени действия', 'Выбор правил'];

class BlockDialogStepper extends Component {

    constructor(props) {
        super(props);
        this.state.confirmedCards = this.props.cards;
    }

    state = {
        activeStep: 0,
        //TODO: Транзакции целиком или только номера карт?
        confirmedCards: [],
        //TODO: Реализовать в виде объекта или массива из двух дат?
        dateRange: {},
        //TODO: Должны подтягиваться из таблицы?
        rules: {}
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
        this.setState({
            activeStep: 0
        })
    };

    handleToggle = value => () => {
        console.log(`Toggle value is ${value}`);
    };

    render() {

        const {classes} = this.props;
        const {activeStep, confirmedCards} = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation={"vertical"}>
                    <Step key={steps[0]}>
                        <StepLabel>{steps[0]}</StepLabel>
                        <StepContent>
                            <div className={classes.cardsRoot}>
                                <div className={classes.listContainer}>
                                    <List subheader={<ListSubheader>Подтвердите выбранные карты для
                                        блокировки</ListSubheader>}>
                                        {confirmedCards.map(card => (
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CreditCardIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary={card}/>
                                                <ListItemSecondaryAction>
                                                    <Switch
                                                        onChange={this.handleToggle}
                                                    />
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        <Typography variant={"button"}>Назад</Typography>
                                    </Button>
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
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step key={steps[1]}>
                        <StepLabel>{steps[1]}</StepLabel>
                        <StepContent>
                            <div className={classes.durationRoot}>
                                <div className={classes.durationContainer}>
                                    Kek
                                </div>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        <Typography variant={"button"}>Назад</Typography>
                                    </Button>
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
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step key={steps[2]}>
                        <StepLabel>{steps[2]}</StepLabel>
                        <StepContent>
                            <div className={classes.rulesRoot}>
                                <div className={classes.rulesContainer}>
                                    Step for rule selection
                                </div>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        <Typography variant={"button"}>Назад</Typography>
                                    </Button>
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