import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
        maxWidth: '240px'

    },
    white: {
        color: theme.palette.common.white
    }
}));

export default function SelectCity(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        city: '',
    });
    const renderCitiesOptions = props.cities.map((city, index) =>
      <option key={index} className={classes.white} aria-label="None" value={city}>{city}</option>
    )
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        props.updateCityFilter(event.target.value)
    };

    return (
      <FormControl className={classes.formControl} variant='outlined'>
          <InputLabel className={classes.white} htmlFor="city-native-simple">City</InputLabel>
          <Select
            className={classes.white}
            native
            value={state.city}
            onChange={handleChange}
            inputProps={{
                name: 'city',
                id: 'city-native-simple',
            }}
          >
              <option className={classes.white} aria-label="None" value="">Anywhere</option>
              {/* API returns a value called "All Locations" - has high potential to be confusion to job seekers, consider changing it to Remote, as All Locations should display all jobs in any city*/}
              {renderCitiesOptions}
          </Select>
      </FormControl>
    );
}
SelectCity.propTypes = {
    cities: PropTypes.array.isRequired,
    updateCityFilter: PropTypes.func.isRequired
}

SelectCity.defaultProps = {
    cities: ['Montreal', 'Toronto']
}
