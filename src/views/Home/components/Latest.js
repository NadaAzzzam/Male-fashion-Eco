import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Event } from '@material-ui/icons';
import blog1 from '../../../assets/images/instagram/instagram-1.jpg';
import blog2 from '../../../assets/images/instagram/instagram-2.jpg';
import blog3 from '../../../assets/images/instagram/instagram-3.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }

}));
function Latest(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.root} blog section`} >
            <Container>
                <Grid container direction="row" spacing={3}>
                    <Grid item lg={12} xs={12} sm={12}>
                        <div className="section-title">
                            <span>Latest News</span>
                            <h2>Fashion New Trends</h2>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={12} sm={12}>
                        <div className="blog__item">
                            <div className="blog__item__pic" style={{ backgroundImage: `url(${blog1})` }}></div>
                            <div className="blog__item__text">
                                <div><Event /> <span>16 February 2020</span> </div>
                                <h5>What Curling Irons Are The Best Ones</h5>
                                {/* <Link to="/">Read More</Link> */}
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} xs={12} sm={12}>
                        <div className="blog__item">
                            <div className="blog__item__pic" style={{ backgroundImage: `url(${blog2})` }}></div>
                            <div className="blog__item__text">
                                <div><Event /> <span>16 February 2020</span> </div>
                                <h5>What Curling Irons Are The Best Ones</h5>
                                {/* <Link to="/">Read More</Link> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={12} sm={12}>
                        <div className="blog__item">
                            <div className="blog__item__pic" style={{ backgroundImage: `url(${blog3})` }}></div>
                            <div className="blog__item__text">
                                <div><Event /> <span>16 February 2020</span> </div>
                                <h5>What Curling Irons Are The Best Ones</h5>
                                {/* <Link to="/">Read More</Link> */}
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default Latest;