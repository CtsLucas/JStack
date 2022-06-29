import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../ContextProvider';

export default function Header() {
  const context = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={context.onToggleTheme}
        value={context.theme}
        onChange={e => context.setName(e.target.value)}
      >
        {context.theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}