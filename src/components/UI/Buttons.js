// import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { grey   } from '@material-ui/core/colors';

export const ColorButton = withStyles((theme) => ({
    root: {
        padding: '.8rem 2rem',
        borderRadius: 0,
        letterSpacing: '4px',
        textTransform: 'uppercase',
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[800],
        },
    },
}))(Button);



