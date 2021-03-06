import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ItemJob from './ItemJob';
import BasicPagination from './Pagination';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    jobcount: {
        marginBottom: theme.spacing(4),
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
        paddingTop: '100px',
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
    const [currentPage, setCurrentPage] = useState(1);
    const onChangePage = (page) => {
        setCurrentPage(page);
    }
    const paginatedJobs = () => {
        return props.jobs.slice((currentPage - 1) * props.jobsPerPage, currentPage * props.jobsPerPage)
    }
    const pageCount = () => {
        return Math.ceil(props.jobs.length / props.jobsPerPage)
    }

    return (
      <React.Fragment>
          <Container className={classes.cardGrid} maxWidth="lg" spacing={4}>
              {isEmpty(paginatedJobs())
                ? <Typography className={classes.title} variant="h6" noWrap> No jobs found... try a different city or search terms.</Typography>
                : <Typography className={classes.jobcount} variant="h6" noWrap>  {props.jobs.length} positions available </Typography>}

              <Grid container spacing={4}>
                  {paginatedJobs().map((job) => (
                    <Grid item key={job.id} xs={12} sm={6} md={4} lg={3}>
                        <ItemJob job={job}/>
                    </Grid>
                  ))}
              </Grid>
              {!isEmpty(paginatedJobs())
                ? <BasicPagination currentPage={currentPage} pageCount={pageCount()} changePage={onChangePage}/>
                : null}
          </Container>
      </React.Fragment>
    );
}

ListJobs.propTypes = {
    jobs: PropTypes.array.isRequired,
    jobsPerPage: PropTypes.number.isRequired
}
