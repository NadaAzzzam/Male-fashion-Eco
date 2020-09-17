import React, { useEffect } from 'react';
import PageTitle from '../../layouts/PageTitle/PageTitle';
import { useLocation } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import SideBar from './components/SideBar';
import Products from './components/Products';

function Shop(props) {

    const title = '  Male-Fashion | Shop    ';
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <PageTitle title={'Shop'} />
            <div className="shop section">
                <Container>
                    <Grid container spacing={1}>
                        <Grid item lg={3} md={3} xs={12}>
                            <SideBar />
                        </Grid>
                        <Grid item lg={9} md={9} xs={12}>
                            <Products />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Shop;