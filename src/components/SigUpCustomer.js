/**
 * This file creates the Customer Sign Up option. It allows the user
 * to fill out the form to create a Customer Account.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

/** style guidelines for the Customer Sign Up component */
const useStyles = makeStyles((theme) => ({
  /** guidelines for the div component */
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  /** guidelines for the form */
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  /** guidelines for the submit button */
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

/** function to create the SignUpCustomer componenet */
export default function SignUpCustomer() {

  const classes = useStyles();

  return (
      /** use container to allow horizontal alignment */
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        {/** title to create customer account */}
        <Typography component="h3" variant="subtitle1">
          Create a Customer Account 
        </Typography>

        {/** create the sign up form for customers */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>

            {/** textfield to enter first name */}
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            {/** textfield to enter last name */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            {/** textfield to enter email address */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            {/** textfield to enter password */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            {/** textfield to enter password confirmation */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

          {/** signup button after entering all information */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}>
            Sign Up
          </Button>

        </form>
      </div>
    </Container>
  );
}