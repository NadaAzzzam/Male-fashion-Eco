import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import productSale from '../../../assets/images/product-sale.png';
import Timer from './Timer';




function Categories(props) {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;


    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        const timerComponents = [];

        Object.keys(timeLeft).forEach((interval) => {
            if (!timeLeft[interval]) {
                return;
            }

            timerComponents.push(
                <span>
                    {timeLeft[interval]} {interval}{" "}
                </span>
            );
        });
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });
    return (
        <div className="categories section">
            <Container>
                <Grid container direction="row">
                    <Grid item lg={3} md={3} xs={12} sm={3}>
                        <div className="categories__text">
                            <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} sm={4}>
                        <div className="categories__hot__deal">
                            <img src={productSale} alt="" />
                            <div className="hot__deal__sticker">
                                <span>Sale Of</span>
                                <h5>$29.99</h5>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} sm={4}>
                        <Timer targetDate="Oct 25, 2020" targetTime="18:00:00" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Categories;