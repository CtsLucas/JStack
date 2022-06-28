import React, { useState } from 'react';

import Header from '../Header';
import Post from '../Post';
import { ThemeProvider } from '../../context/ThemeContext';

import styles from './App.scss';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título da notícia 01',
      subtitle: 'Subtítulo da notícia 01',
      likes: 40,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 02',
      subtitle: 'Subtítulo da notícia 02',
      likes: 10,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 03',
      subtitle: 'Subtítulo da notícia 03',
      likes: 30,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 04',
      subtitle: 'Subtítulo da notícia 04',
      likes: 20,
      read: true,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Titulo da notícia 0${prevState.length + 1}`,
        subtitle: `Subtítulo da notícia 0${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 100),
        read: false,
        removed: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) => (post.id === postId ? { ...post, removed: true } : post))
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

      {posts.map((post) => (
        <Post key={post.id} post={post} onRemove={handleRemovePost} />
      ))}
    </ThemeProvider>
  );
}