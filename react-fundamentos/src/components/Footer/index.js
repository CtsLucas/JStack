import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../ContextProvider';

export default function Footer() {
  const context = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={context.onToggleTheme}>
        {context.theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}