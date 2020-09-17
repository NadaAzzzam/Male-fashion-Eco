import React from 'react';
import PageTitle from '../../layouts/PageTitle/PageTitle';
import CartTable from './components/CartTable';

function Cart(props) {
    return (
        <div className="shopping__cart">
            <PageTitle title={'Shopping'} subtitle={'Shopping Cart'} />
            <CartTable/>
        </div>
    );
}

export default Cart;