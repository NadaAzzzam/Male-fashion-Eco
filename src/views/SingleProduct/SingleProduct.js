import React from 'react';
import ProductPic from './components/ProductPic';
import ProductContent from './components/ProductContent';

function SingleProduct(props) {
    return (
        <div className="product__details">
            <ProductPic/>
            <ProductContent/>
        </div>
    );
}

export default SingleProduct;