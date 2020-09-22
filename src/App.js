import React, { Suspense } from 'react';
import Header from './layouts/Header/Header';
import Routes from './routes';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { CssBaseline, Fab, LinearProgress } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import Footer from './layouts/Footer';
import Preloader from './components/Preloader/Preloader';
import { AnimatedCursor } from './components/Cursor/Cursor';


function App() {
  return (
    <>
      <AnimatedCursor />
      {/* <Preloader /> */}
      <Header />
      <CssBaseline />
      <main>
        <Suspense fallback={<LinearProgress/>}>
          <Routes />
        </Suspense>
      </main>
      {/* SCROLL TO TOP */}
      
      <ScrollTop >
        <Fab onClick={() => window.scrollTo(0, 0)} color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      <Footer />
    </>
  );
}

export default App;
