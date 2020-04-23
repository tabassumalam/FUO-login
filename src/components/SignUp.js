import React from 'react';
import SignUpCustomer from './SigUpCustomer';
import SignUpBusiness from './SignUpBusiness';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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

  /* used for swipeable feature, not included here, will delete later
  const handleChangeIndex = (index) => {
    setValue(index);
  }; */

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
                centered
                aria-label="simple tabs example">

                <Tab label="Customer" /*{...a11yProps(0)}*//>
                <Tab label="Business"  /*{...a11yProps(1)}*//>
            </Tabs>


            <TabPanel value={value} index={0}>
                <SignUpCustomer />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUpBusiness /> 
            </TabPanel>

        </div>
    </Container>
  );
}