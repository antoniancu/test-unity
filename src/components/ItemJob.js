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
        paddingTop: '100px', // 16:9
        backgroundColor: '#d9e4f5',
        backgroundImage: 'linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)'
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
    return (
      <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={`https://source.unsplash.com/283x100/?${props.job.location.name},landmark,${props.job.id}`}
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
              <Button variant="outlined" href={props.job.absolute_url} target="_blank">
                  Discover this role
              </Button>
          </CardActions>
      </Card>
    );
}

Job.propTypes = {
    job: PropTypes.object.isRequired
}
