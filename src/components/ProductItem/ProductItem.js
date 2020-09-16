import React from 'react';
import { Star, StarHalf, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';




function ProductItem(props) {
    const { name, image } = props.item;
    // id,
    return (
        <div className="product__item">
            <div className="product__item__pic " style={{ backgroundImage: `url(${image})` }}>
                <span className="label">New</span>
                <ul className="product__hover">
                    <li><Link to="/shop-details"><Search /></Link>  <span>See More</span></li>

                </ul>
            </div>
            <div className="product__item__text">
                <h6>{name}</h6>
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
    );
}

export default ProductItem;