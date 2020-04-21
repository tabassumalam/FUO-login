import React from 'react';
import SignUpCustomer from './SigUpCustomer';
import SignUpBusiness from './SignUpBusiness';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    root: {
        flexGrow: 1,
      },
  }));

export default function SignUp() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                    Sign Up
            </Typography>

            <Tabs value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered>

                <Tab label="Customer" />

                <Tab label="Business"  />

            </Tabs>


        </div>
    </Container>
  );
}