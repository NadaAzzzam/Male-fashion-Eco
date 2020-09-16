
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import CheckOut from './views/CheckOut/CheckOut';
import ContactUs from './views/ContactUs/ContactUs';
import SignIn from './views/Auth/SignIn/SignIn';
import SingnUp from './views/Auth/SignUp/SingnUp';
import Shop from './views/Shop/Shop';
import SingleProduct from './views/SingleProduct/SingleProduct';
import Cart from './views/Cart/Cart';

const Routes = () => (
    <Switch>
        <Route  exact path="/" component={Home} />
        <Route   path="/checkout" component={CheckOut} />
        <Route   path="/contact_us" component={ContactUs} />
        <Route   path="/sign_in" component={SignIn} />
        <Route   path="/sign_up" component={SingnUp} />
        <Route   path="/shop" component={Shop} />
        <Route   path="/shop-details" component={SingleProduct} />
        <Route   path="/shopping-cart" component={Cart} />
        <Redirect exact from="/#" to="home" />

    </Switch>
)


export default Routes;