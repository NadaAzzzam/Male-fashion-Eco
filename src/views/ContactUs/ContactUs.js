import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTitle from '../../layouts/PageTitle/PageTitle';
import { Container, Grid } from '@material-ui/core';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

function ContactUs(props) {
    const title = '  Male-Fashion | Contact US     ';
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

    }, [pathname]);
    return (

        <>
            <PageTitle title={'Contact Us'} />
            <div className="contact section">
                <Container>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} xs={12}>
                            <ContactInfo/>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default ContactUs;