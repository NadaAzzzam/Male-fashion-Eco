
import React, { lazy } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
const CheckOut = lazy(() => import('./views/CheckOut/CheckOut'))
const ContactUs = lazy(() => import('./views/ContactUs/ContactUs'))
const SignIn = lazy(() => import('./views/Auth/SignIn/SignIn'))
const SingnUp = lazy(() => import('./views/Auth/SignUp/SingnUp'))
const Shop = lazy(() => import('./views/Shop/Shop'))
const SingleProduct = lazy(() => import('./views/SingleProduct/SingleProduct'))
const Cart = lazy(() => import('./views/Cart/Cart'))
const Home = lazy(() => import('./views/Home/Home'))

const Routes = () => {
    const history = useHistory()
    let location = useLocation()

    if (location.hash.startsWith('#/')) {
        history.push(location.hash.replace('#', '')) // or history.replace
    }
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/contact_us" component={ContactUs} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/sign_up" component={SingnUp} />
            <Route path="/shop" component={Shop} />
            <Route path="/shop-details" component={SingleProduct} />
            <Route path="/shopping-cart" component={Cart} />
            <Redirect from="/" to="/home" />
        </Switch>
    )
}
export default Routes;