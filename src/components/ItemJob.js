import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
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
    jobtitle: {
        fontWeight: 'bold'
    }
}));

export default function Job(props) {
    const classes = useStyles();
    const handleJobLink= () => {
        window.open(props.absolute_url, "_blank") //to open new page
    }
    return (
      <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={`https://source.unsplash.com/283x159/?${props.job.location.name},landmark`}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="subtitle1" component="h4">
                  {props.job.location.name}
              </Typography>
              <Typography variant="body1" component="h3" className={classes.jobtitle}>
                  {props.job.title}
              </Typography>
          </CardContent>
          <CardActions>
              <Button onClick={handleJobLink} variant="outlined" color="primary" href="#outlined-buttons">
                  Discover this role
              </Button>
          </CardActions>
      </Card>

    );
}

Job.propTypes = {
    job: PropTypes.object.isRequired
}
