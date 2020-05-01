/**
 * This file creates the Log In component for the Log In/Sign Up page.
 * It allows any user to sign in with their email and password.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/** style guidelines for the Log In compoenent */
const useStyles = makeStyles((theme) => ({
    /** guidelines for the div componenet */
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    /** guidelines for the form */
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        margin: theme.spacing(3),
    },
    /** guidelines for the submit button */
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
  }));

/** style guidelines for new overriden TextField */
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': { // title after focus
            color: 'black',
        },
        '& .MuiInput-underline:after': { //underline after focus
            borderBottomColor: 'black', 
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': { // outline after focus
                borderColor: 'black',
            },
          },
    },
})(TextField);


/** function to create the Log In component  */
export default function LogIn() {

    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [isCustomer, setCustomer] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');


    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === 'Customer') {
            setCustomer(true);
            // render business hub
        } 
        else if (value === 'Business') {
            setCustomer(false);
            // render business hub
        } 
        else {
            setHelperText('Please select an option.');
            // do not render
        } 

      };

    return (
       /** use container to allow horizontal alignment  */
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

            {/** title for the Log In component */}
            <h2> Log in </h2>

            {/** the log in form to fill out  */}
            <form className={classes.form} noValidate onSubmit={handleSubmit}>

                {/** textfield to enter user email address */}
                <CssTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

                {/** textfield to enter user password */}
                <CssTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                {/** grid to identify customer/business accounts */}
                <RadioGroup aria-label="identity" name="identifier" onChange={handleRadioChange}>

                    {/** subtitle indicating user to choose*/}
                    <p> I am a ... </p>

                    {/** grid to create options for identity */}
                    <Grid container>
                        {/** option to identify as customer */}
                        <Grid item>
                            <FormControlLabel
                                value="Customer"
                                control={<Radio color="default" size="small"/>}
                                label={<p> Customer </p>}
                            />
                        </Grid>
                        {/** option to identify as a business */}
                        <Grid item>
                            <FormControlLabel
                                value="Business"
                                control={<Radio color="default" size="small" />}
                                label={<p> Business </p>}
                            />
                        </Grid>
                    </Grid>
                </RadioGroup>
                {/** text to indicate user did not select identity option */}
                <FormHelperText>{helperText}</FormHelperText>


                {/** log in button after enterring email & password */}
                <Link to="/ErrorPage"> 
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="default"
                        className={classes.submit}
                        >
                        Log In
                    </Button>
                </Link> 


                {/** allow users to retrieve password if forgotten */}
                <Grid container>
                    <Grid item xs>
                        {/** link to resetting password */}
                        <Link to="/ErrorPage" variant="p" style={{color: '#1401ee'}}>
                        Forgot password?
                        </Link>
                    </Grid>
                </Grid>

          </form>
        </div>
      </Container>
    );
  }