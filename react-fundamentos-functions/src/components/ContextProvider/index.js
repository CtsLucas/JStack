import React, { createContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { useLocalState } from '../../services/useLocalState';
import themes from '../../styles/themes'

export const ThemeContext = createContext();

export function ContextProvider({ children }) {
  const [ theme, setTheme ] = useLocalState('dark');

  const currentTheme = useMemo(() => {
    return themes[ theme ] || themes.dark;
  }, [ theme ]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, onToggleTheme: handleToggleTheme }}>
      <ThemeProvider theme={currentTheme} >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}