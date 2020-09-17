import React, { useState } from 'react';
import { Container, Grid, TableContainer, TableRow, TableHead, TableCell, TableBody, makeStyles, Table, CardHeader, Avatar, CardMedia, InputBase, Button } from '@material-ui/core';
import { DeleteOutline, ChevronLeft, ChevronRight } from '@material-ui/icons';
import product1 from '../../../assets/images/product/product-1.jpg';
import product2 from '../../../assets/images/product/product-2.jpg';
import product3 from '../../../assets/images/product/product-3.jpg';
// import product5 from '../../../assets/images/product/product-5.jpg';
// import product6 from '../../../assets/images/product/product-6.jpg';
import product4 from '../../../assets/images/product/product-4.jpg';
import { Link } from 'react-router-dom';
import { ColorButton } from '../../../components/UI/Buttons';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
});

// models
export function createData(name, img, price, total, quantity) {
    return { name, img, price, total, quantity };
}


function CartTable(props) {
    const rows = [
        createData('T-shirt Contrast Pocket', product1, 159, 6.0,),
        createData('Diagonal Textured Cap', product2, 237, 9.0,),
        createData('Basic Flowing Scarf', product3, 262, 16.0,),
        createData('Skirt', product4, 305, 3.7,),
    ];
    const classes = useStyles();


    const [quantityValue, setQuantity] = useState(0)
    const increase = () => {
        let total = parseInt(quantityValue) + 1;
        setQuantity(total)
    }
    const decrease = () => {
        if (parseInt(quantityValue) !== 0) {
            let total = parseInt(quantityValue) - 1;
            setQuantity(total)
        }

    }
    return (

        <div className="section">
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <div className="shopping__cart__table">
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Products</TableCell>
                                            <TableCell align="left">Quantity</TableCell>
                                            <TableCell align="center">Total</TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    <CardHeader
                                                        avatar={
                                                            <CardMedia className="card-img" image={row.img} />
                                                        }
                                                        title={row.name}
                                                        subheader={`$ ${row.price}`}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <ChevronLeft onClick={decrease} />
                                                    <InputBase
                                                        className={classes.margin}
                                                        value={quantityValue}
                                                        onChange={(e) => setQuantity(e.target.value)}
                                                        inputProps={{ 'type': 'number' }}
                                                    />
                                                    <ChevronRight onClick={increase} />
                                                </TableCell>
                                                <TableCell align="center" className="cart__price">$ {row.total}</TableCell>
                                                <TableCell align="left">
                                                    <Avatar><DeleteOutline /></Avatar>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                        <Grid container direction="row">
                            <Grid item lg={6}>
                                <Link to="/shop">
                                    <Button variant="outlined">Continue Shopping</Button>
                                </Link>
                            </Grid>
                            <Grid style={{ textAlign: 'right' }} item lg={6}>
                                <ColorButton onClick={() => { console.log('hi') }} >Update Cart</ColorButton>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <div className="cart__discount">
                            <h6>Discount codes</h6>
                            <form action="#">
                                <input type="text" placeholder="Coupon code" />
                                <ColorButton onClick={() => { console.log('hi') }} >Apply</ColorButton>
                            </form>
                        </div>
                        <div className="cart__total">
                            <h6>Cart total</h6>
                            <ul>
                                <li>Subtotal <span>$ 169.50</span></li>
                                <li>Total <span>$ 169.50</span></li>
                            </ul>
                            <Link to="/checkout">
                                <ColorButton onClick={() => { console.log('hi') }} >Proceed to checkout</ColorButton>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CartTable;