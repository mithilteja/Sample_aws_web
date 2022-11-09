import React from "react";

// Global Style
import GlobalStyle from "./components/GlobalStyle.js";

// Import Pages
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import ServicesDetails from "./pages/ServicesDetails";
import Contact from "./pages/Contact";

// Import Nav & Footer
import Nav from "./components/Nav";
import FooterSection from "./components/Footer";

// React Router
import { Switch, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion"; // AnimatePresence détecte lorsqu'il y a un changement de page et permet de faire une animation de sortie sur les élements.

// Scroll To Top When Changing Page
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle /> {/* Applies global styles */}
      <Nav /> {/* Renders navigation menu */}
      <AnimatePresence exitBeforeEnter>
        {/* Detects exit and executes exit animation */}
        <ScrollTop />
        {/* Detects page change and executes a scroll to top of page */}
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home /> {/* Renders Home page */}
          </Route>
          <Route path="/services" exact>
            <ServicesPage /> {/* Renders Services page */}
          </Route>
          <Route path="/services/:id">
            <ServicesDetails /> {/* Renders Services Details page */}
          </Route>
          <Route path="/contact">
            <Contact /> {/* Renders Contact page */}
          </Route>
        </Switch>
      </AnimatePresence>
      <FooterSection /> {/* Renders footer */}
    </div>
  );
}

export default App;
