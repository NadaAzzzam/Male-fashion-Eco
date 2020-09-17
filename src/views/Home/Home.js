import React, { useEffect } from 'react';
import Hero from './components/Hero';
import { useLocation } from 'react-router-dom';
import Products from './components/Products';
import Banner from './components/Banner';
import Latest from './components/Latest';
import Categories from './components/Categories';

function Home(props) {

    const title ='  Male-Fashion | Home    ';
    const { pathname } = useLocation();

   useEffect(() => {
     document.title = title;
     window.scrollTo(0, 0);

   }, [pathname]);
    return (
        <>
            <Hero />
            <Banner/>
            <Products />
            <Categories/>
            <Latest />
        </>
    );
}

export default Home;
