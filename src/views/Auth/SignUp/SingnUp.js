// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import {
//     Button,
//     LinearProgress
// } from '@material-ui/core';
// import MuiTextField from '@material-ui/core/TextField';
// import {
//     fieldToTextField,
//     TextField,
//     TextFieldProps,
//     Select,
//     Switch,
// } from 'formik-material-ui';


// import Box from '@material-ui/core/Box';




// const ranges = [
//     {
//         value: 'none',
//         label: 'None',
//     },
//     {
//         value: '0-20',
//         label: '0 to 20',
//     },
//     {
//         value: '21-50',
//         label: '21 to 50',
//     },
//     {
//         value: '51-100',
//         label: '51 to 100',
//     },
// ];

// function UpperCasingTextField(props) {
//     const {
//         form: { setFieldValue },
//         field: { name },
//     } = props;
//     const onChange = React.useCallback(
//         event => {
//             const { value } = event.target;
//             setFieldValue(name, value ? value.toUpperCase() : '');
//         },
//         [setFieldValue, name]
//     );
//     return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
// }

// const SignUp = () => (
//     <Formik
//         initialValues={{
//             email: '',
//             password: '',
//             select: 'none',
//             tags: [],
//             rememberMe: true,
//             date: new Date(),
//             time: new Date(),
//             dateTime: new Date(),
//         }}
//         validate={values => {
//             const errors = {};
//             if (!values.email) {
//                 errors.email = 'Required';
//             } else if (
//                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//             ) {
//                 errors.email = 'Invalid email address';
//             }
//             if (!values.password) {
//                 errors.password = 'Required';
//             } else if (
//                 values.password.length<8
//             ) {
//                 errors.password = ' password should at least 8 chars';
//             }
//             return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//             setTimeout(() => {
//                 setSubmitting(false);
//                 alert(JSON.stringify(values, null, 2));
//             }, 500);
//         }}
//         render={({ submitForm, isSubmitting, touched, errors }) => (
//             <Form>
//                 <Box margin={1}>
//                     <Field
//                         component={UpperCasingTextField}
//                         name="email"
//                         type="email"
//                         label="Email"
//                     />
//                 </Box>
//                 <Box margin={1}>
//                     <Field
//                         component={TextField}
//                         type="password"
//                         label="Password"
//                         name="password"
//                     />
//                 </Box>
//                 {isSubmitting && <LinearProgress />}



//                 <Box margin={1}>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         disabled={isSubmitting}
//                         onClick={submitForm}
//                     >
//                         Submit
//             </Button>
//                 </Box>
//             </Form>
//         )}
//     />
// );
// export default SignUp




import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}