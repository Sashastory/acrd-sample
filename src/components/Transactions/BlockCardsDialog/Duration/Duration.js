import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/es/Switch/Switch";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Icon from "@material-ui/core/es/Icon/Icon";

const duration = (props) => {

    const {
        durationContainer,
        daysContainer,
        specialContainer,
        dayAmount,
        onChangeDayAmount,
        twoDays,
        onChange,
        twoDaysSwitch,
        iconStyle,
        dateAfter,
        dateAfterField,
        dateBefore,
        dateBeforeField,
        onDateChange
    } = props;

    return (
        <div className={durationContainer}>
            <div className={daysContainer}>
                <TextField
                    id={"day-amount-field"}
                    label="Кол-во дней:"
                    value={dayAmount}
                    onChange={onChangeDayAmount}
                    disabled={twoDays}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <FormControlLabel control={
                    <Switch
                        color={"primary"}
                        checked={twoDays === true}
                        onChange={onChange}
                    />
                } label={"2 дня"} className={twoDaysSwitch}/>
            </div>
            <div className={specialContainer}>
                <TextField
                    id={"date-after-field"}
                    label={"Специальное, От:"}
                    type={"date"}
                    disabled={twoDays}
                    value={dateAfter}
                    className={dateAfterField}
                    onChange={onDateChange('dateAfter')}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <Icon color={"primary"}
                                      className={iconStyle}>calendar_today</Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    id={"date-before-field"}
                    label={"До:"}
                    type={"date"}
                    disabled={twoDays}
                    value={dateBefore}
                    className={dateBeforeField}
                    onChange={onDateChange('dateBefore')}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <Icon color={"primary"}
                                      className={iconStyle}>calendar_today</Icon>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
        </div>
    );
};

export default duration;