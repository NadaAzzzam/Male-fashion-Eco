import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorButton } from '../../../components/UI/Buttons';

const useStyles = makeStyles((theme) => ({


    line: {
        borderTop: "1px solid #d7d7d7",
        paddingTop: "25px",
        marginTop: "30px"

    }
}));
function CheckOutOrder(props) {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,

    });
    const classes = useStyles();

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className="checkout__order">
            <h4 className="order__title">Your order</h4>
            <div className="checkout__order__products">Product <span>Total</span></div>
            <ul className="checkout__total__products">
                <li>01. Vanilla salted caramel <span>$ 300.0</span></li>
                <li>02. German chocolate <span>$ 170.0</span></li>
                <li>03. Sweet autumn <span>$ 170.0</span></li>
                <li>04. Cluten free mini dozen <span>$ 110.0</span></li>
            </ul>
            <div className={`${classes.line} checkout__order__products`}>Payment details</div>
            <ul className="checkout__total__products checkout__total__payment">
                <li>Card type <span>Visa</span></li>
                <li>Card holder <span>Mr John Smith</span></li>
                <li>Card number<span>
                    xxxx-xxxx-xxxx-1234</span></li>
                <li>Expiry date

<span>
                        04/2024</span></li>
            </ul>
            <div className={`${classes.line} checkout__order__products`}>Shipping </div>
            <ul className="checkout__total__products">
                <li>John Smith</li>
                <li>1 Material-UI Drive, Reactville, Anytown, 99999, USA</li>


            </ul>
            <ul className="checkout__total__all">
                <li>Subtotal <span>$750.99</span></li>
                <li>Total <span>$750.99</span></li>
            </ul>

            <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.</p>
            <div className="checkout__input__checkbox">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            color="default"
                        />
                    }
                    label="Create an account?"
                />
            </div>
            <Link to="/checkout">
                <ColorButton onClick={() => { console.log('hi') }} >PLace Order</ColorButton>
            </Link>
        </div>
    );
}

export default CheckOutOrder;