import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { ColorButton } from '../../../components/UI/Buttons';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
}));
function ContactForm(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.root} contact__form`}>
            <Grid container spacing={3}>
                <Grid item lg={6} md={6} xs={12}>
                    <input placeholder="Name" type="text" />

                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <input placeholder="Email" type="text" />

                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                    <textarea placeholder="Message"  rows="10"></textarea>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                    <ColorButton onClick={() => { console.log('hi') }}  >Send Message </ColorButton>
                </Grid>
            </Grid>
        </div>
    );
}

export default ContactForm;