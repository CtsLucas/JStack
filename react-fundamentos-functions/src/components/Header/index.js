import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../ContextProvider';

import { Container } from './styles';

export default function Header() {
  const context = useContext(ThemeContext);

  const history = useHistory();

  function handleNavigate() {
    history.push('/posts');
  }

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
      <button onClick={handleNavigate} style={{color: '#fff'}}>
        Navegar
      </button>
    </Container>
  );
}