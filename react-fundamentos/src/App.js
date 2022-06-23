import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';

export default function App() {
  const [posts, setPost] = useState([
    {
      id: Math.random(),
      title: 'Título da notícia 01',
      subtitle: 'Subtítulo da notícia 01',
      likes: 40,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 02',
      subtitle: 'Subtítulo da notícia 02',
      likes: 10,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 03',
      subtitle: 'Subtítulo da notícia 03',
      likes: 30,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 04',
      subtitle: 'Subtítulo da notícia 04',
      likes: 20,
    },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPost((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Titulo da notícia 0${prevState.length + 1}`,
          subtitle: `Subtítulo da notícia 0${prevState.length + 1}`,
          likes: Math.floor(Math.random() * 100),
        },
      ]);
    }, 2000);
  }

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
          likes={post.likes}
        />
      ))}
    </>
  );
}
