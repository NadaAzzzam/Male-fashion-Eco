import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Star, StarHalf } from '@material-ui/icons';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { ColorButton } from '../../../components/UI/Buttons';
import detailsPayment from '../../../assets/images/shop-details/details-payment.png';
import { Link } from 'react-router-dom';


function ProductContent(props) {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className="product__details__content">
            <Container>
                <Grid container>
                    <Grid item lg={7} sm={12} xs={12} md={7}>
                        <div className="product__details__content--text">
                            <h4>Hooded thermal anorak</h4>
                            <div className="rating">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <StarHalf />
                                <span> - 5 Reviews</span>
                            </div>
                            <h3>$270.00 <span>70.00</span></h3>
                            <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                            cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
with placket.</p>
                            <div className="product__details__content--size">
                                <span>Size:</span>
                                <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleChange}>
                                    <ToggleButton value="left">
                                        xxl
                                    </ToggleButton>
                                    <ToggleButton value="center">
                                        xl
                                    </ToggleButton>
                                    <ToggleButton value="right">
                                        l
                                    </ToggleButton>
                                    <ToggleButton value="justify">
                                        s
                                    </ToggleButton>
                                </ToggleButtonGroup>

                            </div>
                            <div className="product__details__content--cart">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        {/* <KeyboardArrowUp className="dec qtybtn" /> */}
                                        <input type="number" />
                                        {/* <KeyboardArrowDown className="inc qtybtn" /> */}
                                    </div>
                                </div>
                                <Link to="/shopping-cart">
                                    <ColorButton onClick={() => { console.log('hi') }} >Add to Cart</ColorButton>
                                </Link>

                            </div>
                            <div className="product__details__content--last-option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src={detailsPayment} alt="" />
                                <ul>
                                    <li><span>SKU:</span> 3812912</li>
                                    <li><span>Categories:</span> Clothes</li>
                                    <li><span>Tag:</span> Clothes, Skin, Body</li>
                                </ul>
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ProductContent;