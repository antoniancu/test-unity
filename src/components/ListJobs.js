import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ItemJob from './ItemJob';
import BasicPagination from './Pagination';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function ListJobs(props) {
    const classes = useStyles();

    return (
      <React.Fragment>
          <Container className={classes.cardGrid} maxWidth="lg" spacing={4}>
              <Grid container spacing={4}>
                  {props.jobs.map((job) => (
                    <Grid item key={job.id} xs={12} sm={6} md={4}>
                        <ItemJob job={job}/>
                    </Grid>
                  ))}
              </Grid>
              <BasicPagination currentPage={props.currentPage} pageCount={props.pageCount} changePage={props.changePage}/>
          </Container>
      </React.Fragment>
    );
}

ListJobs.propTypes = {
    jobs: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
}
