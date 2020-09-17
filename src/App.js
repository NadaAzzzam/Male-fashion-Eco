import React from 'react';
import Header from './layouts/Header/Header';
import Routes from './routes';
// import ScrollTop from './components/ScrollTop/ScrollTop';
import { CssBaseline } from '@material-ui/core';
import Footer from './layouts/Footer';
import Preloader from './components/Preloader/Preloader';
import { AnimatedCursor } from './components/Cursor/Cursor';


function App() {
  return (
    <>
      <AnimatedCursor />
      <Preloader />
      <Header />
      <CssBaseline />
      <main>
        <Routes />
      </main>
      {/* <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
      <Footer />
    </>
  );
}

export default App;
