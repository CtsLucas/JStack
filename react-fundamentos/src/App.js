import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

export const ThemeContext = createContext();

function App() {
  const [ theme, setTheme ] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[ theme ] || themes.dark;
  }, [ theme ]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
