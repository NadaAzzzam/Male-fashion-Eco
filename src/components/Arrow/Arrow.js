import React from 'react';
import { ArrowForwardRounded ,ArrowBackRounded } from '@material-ui/icons';

export default  function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <ArrowForwardRounded /> : <ArrowBackRounded />;

    return <div onClick={clickFunction}>{icon}</div>;
}