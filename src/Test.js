import React from 'react';
import {ThemeProvider} from "styled-components";
import  { useDarkMode } from "./components/DarkMode/useDarkMode"
import { GlobalStyles } from "./components/DarkMode/Globalstyle";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme"
import Toggle from "./components/DarkMode/Toggler"

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div/>
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles/>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
      </>
    </ThemeProvider>
  );
}

export default App;