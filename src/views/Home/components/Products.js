
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, AppBar, Container, Grid } from '@material-ui/core';
import { Star, StarHalf } from '@material-ui/icons';

import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';


import product1 from '../../../assets/images/product/product-1.jpg';
import product2 from '../../../assets/images/product/product-2.jpg';
import product3 from '../../../assets/images/product/product-3.jpg';
import product4 from '../../../assets/images/product/product-4.jpg';
import product5 from '../../../assets/images/product/product-5.jpg';
import product6 from '../../../assets/images/product/product-6.jpg';
import product7 from '../../../assets/images/product/product-7.jpg';
import product8 from '../../../assets/images/product/product-8.jpg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    tablist: {
        backgroundColor: theme.palette.background.default,
        color: 'black',
        fontSize: '2rem'

    },
    appbar: {
        boxShadow: 'none'
    },
    indicator: {
        backgroundColor: 'transparent'
    }
}));

export default function Products() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="product section">
            <TabContext className={classes.root} value={value}>
                <AppBar className={classes.appbar} position="static">
                    <TabList className={classes.tablist} TabIndicatorProps={{
                        classes: {
                            root: classes.indicator,
                        },
                    }} indicatorColor="primary" centered onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Best Sellers" value="1" />
                        <Tab label="New Arrivals" value="2" />
                        <Tab label="Hot Sales" value="3" />
                    </TabList>
                </AppBar>
                <TabPanel value="1">
                    <div >
                        <Container>
                            <Grid container spacing={4}>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product1})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product2})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product3})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item sale">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product4})` }}>
                                            <span className="label">Sale</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product5})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product6})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product7})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item sale">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product4})` }}>
                                            <span className="label">Sale</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>

                            </Grid>
                        </Container>
                    </div>

                </TabPanel>
                <TabPanel value="2">

                    <div >
                        <Container>
                            <Grid container spacing={4}>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product4})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product5})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product6})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item sale">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product7})` }}>
                                            <span className="label">Sale</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>

                            </Grid>
                        </Container>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                    <div >
                        <Container>
                            <Grid container spacing={4}>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product8})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product4})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product6})` }}>
                                            <span className="label">New</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={3} xs={12} sm={6}>
                                    <div className="product__item sale">
                                        <div className="product__item__pic " style={{ backgroundImage: `url(${product1})` }}>
                                            <span className="label">Sale</span>
                                            {/* <ul className="product__hover">
                                                <li><Link to="/"><img src="img/icon/heart.png" alt="" /></Link></li>
                                                <li><Link to="/"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                                                <li><Link to="/"><img src="img/icon/search.png" alt="" /></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <Link to="/shopping-cart" className="add-cart">+ Add To Cart</Link>

                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <StarHalf />
                                            </div>
                                            <h5>$67.24</h5>

                                        </div>
                                    </div>
                                </Grid>

                            </Grid>
                        </Container>
                    </div>
                </TabPanel>


            </TabContext>
        </div>
    );
}
