import React, { useState, useRef } from 'react';
import './App.css'

import Main from "./components/Home/Main";
import NavbarAv from "./components/Home/NavbarAv";
import ScrollTop from './components/ScrollTop/ScrollTop';
import CardArray from './components/Home/CardArray';
import Footer from './components/Home/Footer';

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode/useDarkMode"
import { GlobalStyles } from "./components/DarkMode/Globalstyle";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme"
import Toggle from "./components/DarkMode/Toggler"

import Agronomia from "./components/Fetch/Agronomia";
import Alimentos from "./components/Fetch/Alimentos";
import Biotecnologia from './components/Fetch/Biotecnologia';
import LicQuimica from './components/Fetch/LicQuimica';
import ProfQuimica from './components/Fetch/ProfQuimica';
import Apicultura from './components/Fetch/Apicultura';


const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="container-fluid">

          <NavbarAv/>
          <div className="div-float">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="blank-container"></div>
          <Main />

          <div className="blank-container" id="agronomia"></div>
          <div className="container mb-3">
            <Agronomia />
          </div>

          <div className="blank-container" id="alimentos"></div>
          <div className="container mb-3" >
            <Alimentos />
          </div>

          <div className="blank-container" id="biotecnologia"></div>
          <div className="container mb-3">
            <Biotecnologia />
          </div>

          <div className="blank-container" id="licquimica"></div>
          <div className="container mb-3">
            <LicQuimica />
          </div>

          <div className="blank-container" id="profquimica"></div>
          <div className="container mb-3">
            <ProfQuimica />
          </div>

          <div className="blank-container" id="apicultura"></div>
          <div className="container mb-3">
            <Apicultura />
          </div>

          <div>
            <ScrollTop />
          </div>
          <div className="blank-container" id="consultas"></div>
          <CardArray />
          <div className="blank-container" id="footer"></div>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
