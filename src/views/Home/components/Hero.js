import React from 'react';
import Slider from 'react-slick';
import hero1 from '../../../assets/images/hero/hero-1.jpg';
import hero2 from '../../../assets/images/hero/hero-2.jpg';
import { Container, Grid } from '@material-ui/core';
import { Facebook, Twitter, Pinterest, Instagram, ArrowForward } from '@material-ui/icons';
import { ColorButton } from '../../../components/UI/Buttons';
import { Link } from 'react-router-dom';

export default function Hero(props) {


    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <>

            <div className="hero">
                <Slider {...settings}>
                    <div >
                        <div className="hero__slider" style={{ backgroundImage: `url(${hero1})` }}>
                            <Container>
                                <Grid container >
                                    <Grid item lg={5} md={8} xs={12} sm={6}>
                                        <div className="hero__text">
                                            <h6>Summer Collection</h6>
                                            <h2>Fall - Winter Collections 2030</h2>
                                            <p>A specialist label creating luxury essentials. Ethically crafted
                                            with an unwavering
                                                    commitment to exceptional quality.</p>
                                            <ColorButton onClick={() => { console.log('hi') }} endIcon={<ArrowForward />} >Shop Now</ColorButton>
                                            <div className="hero__social   flex-center">
                                                <Link to="/"><Facebook /></Link>
                                                <Link to="/"><Twitter /></Link>
                                                <Link to="/"><Pinterest /></Link>
                                                <Link to="/"><Instagram /></Link>
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </Container>
                        </div>
                    </div>
                    <div >
                        <div className="hero__slider" style={{ backgroundImage: `url(${hero2})` }}>
                            <Container>
                                <Grid container >
                                    <Grid item lg={5} md={8} xs={12} sm={6}>
                                        <div className="hero__text">
                                            <h6>Summer Collection</h6>
                                            <h2>Fall - Winter Collections 2030</h2>
                                            <p>A specialist label creating luxury essentials. Ethically crafted
                                            with an unwavering
                                                    commitment to exceptional quality.</p>
                                            <ColorButton onClick={() => { console.log('hi') }} endIcon={<ArrowForward />} >Shop Now</ColorButton>
                                            <div className="hero__social flex-center">
                                                <Link to="/"><Facebook /></Link>
                                                <Link to="/"><Twitter /></Link>
                                                <Link to="/"><Pinterest /></Link>
                                                <Link to="/"><Instagram /></Link>
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </Container>
                        </div>
                    </div>

                </Slider>

            </div>


        </>

    );
}