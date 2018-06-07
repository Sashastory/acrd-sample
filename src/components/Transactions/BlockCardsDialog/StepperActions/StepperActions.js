import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const stepperActions = (props) => {

    const {
        actionsContainer,
        button,
        onClickNext,
        onClickBack,
        activeStep,
        steps
    } = props;

    return (
        <div className={actionsContainer}>
            <Button
                variant={"raised"}
                color={"secondary"}
                onClick={onClickNext}
                className={button}
            >
                {activeStep === steps.length - 1 ?
                    <Typography variant={"button"}>Завершить</Typography> :
                    <Typography variant={"button"}>Далее</Typography>}
            </Button>
            <Button
                disabled={activeStep === 0}
                onClick={onClickBack}
                className={button}
            >
                <Typography variant={"button"}>Назад</Typography>
            </Button>

        </div>
    );
};

export default stepperActions;