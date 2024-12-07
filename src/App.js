import React, { createContext, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './Router/MainRouter';
import { ThemeProvider } from '@mui/material/styles';
import AppTheme from '../src/Theme/AppTheme';  // Import AppTheme
import { GSAPProvider } from './gsap/gsapContext';

// Create ThemeContext
const ThemeContext = createContext();

// Create a custom hook for easier use of ThemeContext
export const useThemeContext = () => useContext(ThemeContext);

function App() {
  return (
    <ThemeContext.Provider value={AppTheme}>
      <ThemeProvider theme={AppTheme}>
        <BrowserRouter>
          <GSAPProvider>
            <MainRouter />
          </GSAPProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
