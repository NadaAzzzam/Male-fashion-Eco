import React, { useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import PageTitle from '../../../layouts/PageTitle/PageTitle';
import { PlayCircleOutline } from '@material-ui/icons';
import thumb1 from '../../../assets/images/shop-details/thumb-1.png';
import thumb2 from '../../../assets/images/shop-details/thumb-2.png';
import thumb3 from '../../../assets/images/shop-details/thumb-3.png';
import thumb4 from '../../../assets/images/shop-details/thumb-4.png';
import bgthumb1 from '../../../assets/images/shop-details/product-big.png';
import bgthumb2 from '../../../assets/images/shop-details/product-big-2.png';
import bgthumb3 from '../../../assets/images/shop-details/product-big-3.png';
import bgthumb4 from '../../../assets/images/shop-details/product-big-4.png';


function ProductPic() {
    const [bg,SetBg]=useState(bgthumb1);

    return (
        <div className="product__details__pic">
            <Container>
                <Grid container>
                    <Grid item xs={12} lg={12}>
                        <PageTitle title={'Shop'} subtitle={'Product Details'} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3} md={3} lg={3}>
                        <ul className="nav nav-tabs" >
                            <li className="nav-item">
                                <span onClick={()=>{SetBg(bgthumb1)}} className="nav-link active"   >
                                    <div className="product__thumb__pic " style={{ backgroundImage: `url(${thumb1})` }}>
                                    </div>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={()=>{SetBg(bgthumb2)}}  >
                                    <div className="product__thumb__pic " style={{ backgroundImage: `url(${thumb2})` }}>
                                    </div>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"  onClick={()=>{SetBg(bgthumb3)}}  >
                                    <div className="product__thumb__pic " style={{ backgroundImage: `url(${thumb3})` }}>
                                    </div>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={()=>{SetBg(bgthumb4)}}   >
                                    <div className="product__thumb__pic " style={{ backgroundImage: `url(${thumb4})` }}>
                                        <PlayCircleOutline />
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={9} sm={9} lg={6}>
                        <div className="product__details__pic__item">
                            <img src={bg} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ProductPic;