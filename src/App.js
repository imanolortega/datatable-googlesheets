import React from "react";
import "./App.css";

import Main from "./components/Home/Main";
import NavbarAv from "./components/Home/NavbarAv";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CardArray from "./components/Home/CardArray";
import Footer from "./components/Home/Footer";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode/useDarkMode";
import { GlobalStyles } from "./components/DarkMode/Globalstyle";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";
import Toggle from "./components/DarkMode/Toggler";

import TableSearch from "./components/Fetch/TableSearch";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="container-fluid">
          <NavbarAv />
          <div className="div-float">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="blank-container"></div>
          <Main />

          <div className="blank-container" id="agronomia"></div>
          <div className="container mb-3">
            <TableSearch
              keyApi="1FfUz54c34mNAmPXL52tt2g7RER6rGqMCx1hn0gEHrHM"
              name="Ing. Agronómica"
              excel="clases-virtuales-ing-agronomica"
            />
          </div>

          <div className="blank-container" id="alimentos"></div>
          <div className="container mb-3">
            <TableSearch
              keyApi="1ZvKWYQE1Elvkdb8KBEwY6fVJy7l-uaGHvRs8dkf1vSM"
              name="Ing. en Alimentos"
              excel="clases-virtuales-ing-alimentos"
            />
          </div>

          <div className="blank-container" id="biotecnologia"></div>
          <div className="container mb-3">
            <TableSearch
              keyApi="1fbrgM7DvzcfWwORY4RL8SktmgiRnKAI4fdQAxskwjq4"
              name="Lic. en Biotecnología"
              excel="clases-virtuales-lic-biotecnologia"
            />
          </div>

          <div className="blank-container" id="licquimica"></div>
          <div className="container mb-3">
            <TableSearch
              keyApi="1mNq112OhvtIMrp3HuV6w8LG8TdmrQbgtqdF30qS-blo"
              name="Lic. Química"
              excel="clases-virtuales-lic-quimica"
            />
          </div>

          <div className="blank-container" id="profquimica"></div>
          <div className="container mb-3">
            <TableSearch
              keyApi="1M9v3exeqk-5C5ExQ6-M7hInziC0WTyR1ID7_jmdLOg0"
              name="Prof. Química"
              excel="clases-virtuales-prof-quimica"
            />
          </div>

          <div className="blank-container" id="tua"></div>
          <div className="container mb-3">
            <TableSearch
              keyApi="1Jaf8yzhd-rExuEvkm1U6QyXaEWbEeNA8_JoRbtq8ZgU"
              name="Tec. Univ. en Apicultura"
              excel="clases-virtuales-tua"
            />
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
};

export default App;
