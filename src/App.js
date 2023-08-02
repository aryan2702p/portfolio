import React from "react";
import About from './components/about/about'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Exp from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'
import Test from './components/testimonials/testimonial'
import Contact from './components/contacts/contact'
import Footer from './components/footer/footer'

const App = () => {
    return  (
        <>
        <Header />
        <Nav />
       <About />
       <Exp />
       <Services />
       <Portfolio />
       <Test />
       <Contact />
       <Footer />

        </>
    );
   
    
};
export default App;