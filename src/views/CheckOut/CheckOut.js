import { Container, Grid } from '@material-ui/core';
import React from 'react';
import CheckOutForm from './components/CheckOutForm';
import CheckOutOrder from './components/CheckOutOrder';

function CheckOut(props) {
    return (
        <div className="checkout section">
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <CheckOutForm/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <CheckOutOrder/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CheckOut;