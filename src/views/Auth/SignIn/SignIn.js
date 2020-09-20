
import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
    Grid,
    LinearProgress,
    makeStyles,
    Box, Avatar, Typography, Paper
} from '@material-ui/core';
import {
    TextField
} from 'formik-material-ui';
import { ColorButton } from '../../../components/UI/Buttons';
import { LockOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
    button: {
        width: '100%'
    }
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Grid container >
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Formik className='section'
                    initialValues={{
                        email: '',
                        password: ''
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

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                    }}
                    render={({ submitForm, isSubmitting, touched, errors }) => (
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

                                <Grid item xs={12} >
                                    <Box marginBottom={2}>
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
                                    <Box marginBottom={2}>
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

                                <Grid item xs={12} >
                                    {isSubmitting && <LinearProgress />}
                                    <Box className={classes.submit} >
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

                    )}
                />
            </Grid>
        </Grid>
    );
}