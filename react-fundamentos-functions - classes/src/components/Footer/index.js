import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Container } from './styles';

export default class Footer extends Component {
  static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired,
  }

  render() {
    const { onToggleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <span>JStack's Blog. Todos os direitos reservados.</span>
        <button
          type="button"
          onClick={onToggleTheme}
        >
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}