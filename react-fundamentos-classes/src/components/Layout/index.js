import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';
import { useTheme } from 'styled-components';

export default function Layout() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <PostsList />
      <div // Exemplo de utilização do useTheme();
        style={{
          backgroundColor: theme.postBackgroundColor,
          display: 'flex',
          flexDirection: 'column',
          padding: theme.spacing.medium,
          borderRadius: theme.borderRadius,
          marginTop: theme.spacing.small,
        }}>
        <h2 style={{
          margin: 0,
        }}>useTheme</h2>
        <small>
          Qui exercitation voluptate aute qui nisi.
        </small>
      </div>
      <Footer />
    </>
  );
}