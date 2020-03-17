import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem, FormHelperText, FormControl,  InputLabel, Select} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CitySelect({selected, cityList, fetchWeatherReport}) {
    const classes = useStyles();
    const onChangeCity =  (evt) => {
        fetchWeatherReport(evt.target.value)
    }

    return <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Change City</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            onChange={onChangeCity}
        >
            {cityList.map((city)=> {
               return <MenuItem value={city.id}>{city.name}</MenuItem>;
            })}

        </Select>
    </FormControl>;
};