import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Container,
  Grid,
  LinearProgress,
  makeStyles,
  Box, Avatar, Typography
} from '@material-ui/core';
import {
  TextField
} from 'formik-material-ui';
import { ColorButton } from '../../../components/UI/Buttons';
import { LockOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#111111',
  },
  mb: {
    marginBottom: theme.spacing(3)
  },
  textForm: {
    width: '100%', // Fix IE 11 issue.
    '& label.Mui-focused': {
      color: '#111111',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#111111',
    },
    '& .MuiOutlinedInput-root': {

      '&.Mui-focused fieldset': {
        borderColor: '#111111',
      }
    }
  },
  submit: {
    textAlign: 'center',
    
  },
  button:{
    width:'100%'
  }
}));


const SignUp = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        phone: '',
        c_password: ''
      }}
      validate={values => {
        const errors = {};
        // email
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        // Password
        if (!values.password) {
          errors.password = 'Required';
        } else if (
          values.password.length < 8
        ) {
          errors.password = ' password should at least 8 chars';
        }

        // Name
        if (!values.name) {
          errors.name = 'Required';
        }

        // Phone
        if (!values.phone) {
          errors.phone = 'Required';
        } else if (values.phone.length <= 11) {
          errors.phone = 'Not a valid Phone Number';

        }

        // Confirm Password
        if (!values.c_password) {
          errors.c_password = 'Required';
        } else if (values.password !== values.c_password) {
          errors.c_password = "Passwords don't match";

        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ submitForm, isSubmitting, touched, errors }) => (
        <Container className='section' maxWidth="sm">
          <Form className={classes.paper}>
            <div className={classes.mb}>
              <Avatar className={classes.avatar}>
                <LockOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
        </Typography>
            </div>


            <Grid container >
              <Grid item xs={12} sm={6}>
                <Box margin={1}>
                  <Field
                    className={classes.textForm}
                    component={TextField}
                    variant="outlined"
                    name="name"
                    type="name"
                    label="Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box margin={1}>
                  <Field
                    className={classes.textForm}
                    component={TextField}
                    variant="outlined"
                    name="email"
                    type="email"
                    label="Email"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} >
                <Box margin={1}>
                  <Field
                    className={classes.textForm}
                    component={TextField}
                    variant="outlined"
                    name="phone"
                    type="phone"
                    label="Phone"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box margin={1}>
                  <Field
                    className={classes.textForm}
                    component={TextField}
                    variant="outlined"
                    type="password"
                    label="Password"
                    name="password"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box margin={1}>
                  <Field
                    className={classes.textForm}
                    component={TextField}
                    variant="outlined"
                    type="password"
                    label="Confirm Password"
                    name="c_password"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} >
                {isSubmitting && <LinearProgress />}
                <Box className={classes.submit} margin={1}>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    disabled={isSubmitting}
                    className={classes.button}
                  >
                    Submit
                  </ColorButton>
                </Box>
              </Grid>
            </Grid>
          </Form>
        </Container>

      )}
    />
  );
}
export default SignUp


