import React from 'react';
import HeaderSecond from './HeaderSecond/HeaderSecond';
import HeaderTop from './HeaderTop/HeaderTop';

const Header = (props)=> {
    return (
        <header>
            <HeaderTop/>
           <HeaderSecond/>
        </header>
    );
}

export default Header;