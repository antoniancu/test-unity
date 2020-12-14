import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function BasicPagination(props) {
    const classes = useStyles();
    const handleChange = (event, page) => {
        props.changePage(page)
    }

    return (
      <div className={classes.root}>
          <Pagination count={props.pageCount} page={props.currentPage} onChange={handleChange}/>
      </div>
    );
}

BasicPagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
}
