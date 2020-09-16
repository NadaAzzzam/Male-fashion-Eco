import React from 'react';
import Header from './layouts/Header/Header';
import Routes from './routes';
// import ScrollTop from './components/ScrollTop/ScrollTop';
import { CssBaseline } from '@material-ui/core';
import Footer from './layouts/Footer';


function App() {
  return (
    <>
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
