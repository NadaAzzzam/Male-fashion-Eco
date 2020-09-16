import React from 'react';
import { Search } from '@material-ui/icons';
import { makeStyles, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightBold,
        color: '#111111',
        textTransform: 'uppercase',
    },
}));
function SideBar(props) {
    const classes = useStyles();

    return (
        <div className="shop__sidebar">
            <div className="shop__sidebar__search">
                <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><Search /></button>
                </form>
            </div>
            <div className="shop__sidebar__accordion">

                <div className={classes.root}>
                    <Accordion>

                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>catagories</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Typography> */}
                            <ul className="nice-scroll" >
                                <li><Link to="/">Men (20)</Link></li>
                                <li><Link to="/">Women (20)</Link></li>
                                <li><Link to="/">Bags (20)</Link></li>
                                <li><Link to="/">Clothing (20)</Link></li>
                                <li><Link to="/">Shoes (20)</Link></li>
                                <li><Link to="/">Accessories (20)</Link></li>
                                <li><Link to="/">Kids (20)</Link></li>
                                <li><Link to="/">Kids (20)</Link></li>
                                <li><Link to="/">Kids (20)</Link></li>
                            </ul>
                            {/* </Typography> */}
                        </AccordionDetails>

                    </Accordion>
                    <Accordion>

                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>branding </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Typography> */}
                            <ul className="nice-scroll" >
                                <li><Link to="/">H &amp; M</Link></li>
                                <li><Link to="/">Zara</Link></li>
                                <li><Link to="/">Active</Link></li>
                                <li><Link to="/">Bersheka</Link></li>
                                <li><Link to="/">Tie Shop</Link></li>
                                <li><Link to="/">Pull &amp; Bear </Link></li>
                                <li><Link to="/">Max </Link></li>
                                <li><Link to="/">Raven </Link></li>

                            </ul>
                            {/* </Typography> */}
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </div>
    );
}

export default SideBar;