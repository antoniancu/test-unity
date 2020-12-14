import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    avatar: {
        display: 'flex',
        margin: 'auto',
        marginBottom: '2rem'
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
      <React.Fragment>
          <footer className={classes.footer}>
              <Avatar className={classes.avatar} alt="Anton Iancu"
                      src="https://media-exp1.licdn.com/dms/image/C5603AQHhqFHakdfx-w/profile-displayphoto-shrink_200_200/0/1549242972490?e=1613606400&v=beta&t=1tIk3b3Lh3d1UG5atNXM17QnCtU847ujygXw7n9Bfr0"/>
              <Typography variant="h6" align="center" gutterBottom>
                  Unity Technical Challenge - by <Link color="inherit" href="mailto:anton.iancu@gmail.com"> Anton Iancu </Link>
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  Thank you for your consideration!
              </Typography>
          </footer>
      </React.Fragment>
    );
}
