import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Make a Business Account
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="businessName"
                /*variant="outlined"*/
                required
                fullWidth
                id="businessName"
                label="Business Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="businessType"
                /*variant="outlined"*/
                required
                fullWidth
                id="businessType"
                label="Business Type"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                /*variant="outlined"*/
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                /*variant="outlined"*/
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                /*variant="outlined"*/
                required
                fullWidth
                name="link"
                label="Website"
                type="link"
                id="link"
                autoComplete="link"
              />
            </Grid>

            {/* how do i upload files? */}

            <Grid item xs={12}>
              <TextField
                /*variant="outlined"*/
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                /*variant="outlined"*/
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign Up
          </Button>

        </form>
      </div>

    </Container>
  );
}