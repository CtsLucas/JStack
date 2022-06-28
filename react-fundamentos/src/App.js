import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ContextProvider } from './components/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Layout />
    </ContextProvider>
  );
};

export default App;
