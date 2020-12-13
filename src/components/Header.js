import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import JobSearch from './JobSearch';
import SelectCity from './SelectCity';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    spacer: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            flexGrow: 1,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2),
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    responsiveMenu: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2, 2),
        background: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            padding: theme.spacing(0, 2),
        },
    },
}));
//todo: add a clear button for search and city filters

export default function AppNavBar(props) {
    const classes = useStyles();
    return (
      <div className={classes.grow}>
          <AppBar position="static">
              <Toolbar className={classes.responsiveMenu}>
                  <Typography className={classes.title} variant="h6" noWrap>
                      Careers at Unity
                  </Typography>
                  <JobSearch updateSearchFilter={props.updateSearchFilter}/>
                  <div className={classes.spacer}/>
                  <SelectCity cities={props.cities} updateCityFilter={props.updateCityFilter}/>
              </Toolbar>
          </AppBar>
      </div>
    );
}

AppNavBar.propTypes = {
    cities: PropTypes.array.isRequired,
    updateCityFilter: PropTypes.func.isRequired,
    updateSearchFilter: PropTypes.func.isRequired
}

