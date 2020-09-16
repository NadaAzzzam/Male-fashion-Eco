import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function PageTitle(props) {

    return (
        <div className="breadcrumb-option">
            <Container>
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <div className="breadcrumb__text">
                            <h4>{props.title}</h4>
                            <div className="breadcrumb__links">
                                <Link to="/">Home</Link>
                                <ArrowForwardIosIcon />
                                <span className="title">{props.title}</span>
                                {
                                    props.subtitle ?
                                        <>
                                            <ArrowForwardIosIcon />
                                            <span className="subtitle">{props.subtitle}</span>
                                        </>
                                        : null

                                }



                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default PageTitle;