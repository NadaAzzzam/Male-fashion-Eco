import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import banner1 from '../../../assets/images/banner/banner-1.jpg';
import banner2 from '../../../assets/images/banner/banner-2.jpg';
import banner3 from '../../../assets/images/banner/banner-3.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    mlCol: {
        marginLeft: " 33.333333%"
    },
    mrCol: {
        marginRight: " 33.333333%"
    }

}));
function Banner(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.root} banner section`} >
            <Container>
                <Grid container>
                    <Grid item lg={7} xl={7} md={7} sm={12} xs={12} className={classes.mlCol} >
                        <div className="banner__item">
                            <div className="banner__item__pic" >
                                <img src={banner1} alt="" />
                            </div>
                            <div className="banner__item__text">
                                <h2><span>Clothing</span>   Collections 2030</h2>
                                <Link to="/">Shop now</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={5} xl={5} md={5} sm={12} xs={12} >
                        <div className="banner__item banner__item--middle">
                            <div className="banner__item__pic">
                                <img src={banner2} alt="" />
                            </div>
                            <div className="banner__item__text">
                                <h2>Accessories</h2>
                                <Link to="/">Shop now</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={7} xl={7} md={7} sm={12} xs={12} >
                        <div className="banner__item banner__item--last">
                            <div className="banner__item__pic">
                                <img src={banner3} alt="" />
                            </div>
                            <div className="banner__item__text">
                                <h2>
                                    Shoes Spring 2030</h2>
                                <Link to="/">Shop now</Link>
                            </div>
                        </div>
                    </Grid>


                </Grid>
            </Container>
        </div>
    );
}

export default Banner;