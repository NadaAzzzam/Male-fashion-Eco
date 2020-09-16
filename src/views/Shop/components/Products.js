import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import ProductItem from '../../../components/ProductItem/ProductItem';
import product1 from '../../../assets/images/product/product-1.jpg';
import product2 from '../../../assets/images/product/product-2.jpg';
import product3 from '../../../assets/images/product/product-3.jpg';
import product4 from '../../../assets/images/product/product-4.jpg';
import product5 from '../../../assets/images/product/product-5.jpg';
import product6 from '../../../assets/images/product/product-6.jpg';
import product7 from '../../../assets/images/product/product-7.jpg';
import product8 from '../../../assets/images/product/product-8.jpg';
import product9 from '../../../assets/images/product/product-9.jpg';
import product10 from '../../../assets/images/product/product-10.jpg';
import product11 from '../../../assets/images/product/product-11.jpg';
import product12 from '../../../assets/images/product/product-12.jpg';
import product13 from '../../../assets/images/product/product-13.jpg';

const useStyles = makeStyles((theme) => ({

    product: {
        paddingRight: `  ${theme.spacing(2)}px`
    },
}));
function Products(props) {
    const classes = useStyles();

    const products = [
        { id: 1, name: 'Piqué Biker Jacket', image: product1 },
        { id: 2, name: 'Piqué Biker Jacket', image: product2 },
        { id: 3, name: 'Piqué Biker Jacket', image: product3 },
        { id: 4, name: 'Piqué Biker Jacket', image: product4 },
        { id: 5, name: 'Piqué Biker Jacket', image: product5 },
        { id: 6, name: 'Piqué Biker Jacket', image: product6 },
        { id: 7, name: 'Piqué Biker Jacket', image: product7 },
        { id: 8, name: 'Piqué Biker Jacket', image: product8 },
        { id: 9, name: 'Piqué Biker Jacket', image: product9 },
        { id: 10, name: 'Piqué Biker Jacket', image: product10 },
        { id: 11, name: 'Piqué Biker Jacket', image: product11 },
        { id: 12, name: 'Piqué Biker Jacket', image: product12 },
        { id: 13, name: 'Piqué Biker Jacket', image: product13 },
    ]

    return (
        <>
            <div className="shop__product__option">
                <Grid container direction="row" >
                    <Grid item lg={6} md={6} xs={12}>
                        <div className="shop__product__option__left">
                            <p>Showing 1–12 of 126 results</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Grid container >
                {
                    products.map((item, index) =>
                        <Grid key={`${item.id}product${index}`} item lg={4} md={4} xs={12} className={classes.product}>
                            <ProductItem item={item} />
                        </Grid>
                    )
                }

            </Grid>
            <Grid container>
                <Grid item lg={12} md={12} xs={12} >
                    <Pagination count={6} siblingCount={0} />

                </Grid>
            </Grid>
        </>
    );
}

export default Products;