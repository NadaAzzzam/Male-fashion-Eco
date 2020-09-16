import React from 'react';
import { Container, Grid, makeStyles, TextField } from '@material-ui/core';
import { Email, FavoriteBorder } from '@material-ui/icons';
import footerLogo from '../assets/images/footer-logo.png';
import payment from '../assets/images/payment.png';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    control1: {
        marginLeft: theme.spacing(12),
    },
    control2: {
        marginRight: theme.spacing(12),
    },
    input: {
        '& .MuiInputBase-input': {
            color: 'white',
        },

    },

    label: {
        color: '#b7b7b7 !important'
    }
}));
function Footer(props) {

    const classes = useStyles();

    return (
        <footer className="footer">
            <Container>
                <Grid container direction="row">
                    <Grid lg={3} item md={6} xl={3} xs={12} sm={6}>
                        <div className="footer__about">
                            <div className="footer__logo">
                                <Link to="/"><img src={footerLogo} alt="" /></Link>
                            </div>
                            <p>The customer is at the heart of our unique business model, which includes design.</p>
                            <Link to="/"><img src={payment} alt="" /></Link>
                        </div>
                    </Grid>
                    <Grid className={classes.control1} lg={2} item md={6} xl={2} xs={12} sm={6}>
                        <div className="footer__widget">
                            <h6>Shopping</h6>
                            <ul>
                                <li><Link to="/">Clothing Store</Link></li>
                                <li><Link to="/">Trending Shoes</Link></li>
                                <li><Link to="/">Accessories</Link></li>
                                <li><Link to="/">Sale</Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid className={classes.control2} lg={2} item md={6} xl={2} xs={12} sm={6}>
                        <div className="footer__widget">
                            <h6>Shopping</h6>
                            <ul>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Payment Methods</Link></li>
                                <li><Link to="/">Delivary</Link></li>
                                <li><Link to="/">Return &amp; Exchanges</Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid lg={3} item md={6} xl={3} xs={12} sm={6}>
                        <div className="footer__widget">
                            <h6>NewLetter</h6>
                            <div className="footer__newslatter">
                                <p>Be the first to know about new arrivals, look books, sales &amp; promos!</p>
                                <Grid container spacing={1} alignItems="flex-end">

                                    <Grid item>
                                        <TextField className={classes.textField} id="input-with-icon-grid" label=" Email" InputLabelProps={{
                                            classes: {
                                                root: classes.label,
                                            },
                                        }}
                                            InputProps={{ className: classes.input }} />
                                    </Grid>
                                    <Grid item>
                                        <Email className="text-white" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid lg={12} item xs={12} >
                        <div className="footer__copyright__text">
                            <p>Copyright ©  20202020 All rights reserved | This template is made with   <FavoriteBorder /> by <a href="https://colorlib.com" className="text-red">Colorlib</a>
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;