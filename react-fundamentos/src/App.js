import React from 'react';
import Header from './Header';
import Post from './Post';

export default function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      <Post
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtítulo da notícia 01',
        }}
        likes={20}
      />
      <Post
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtítulo da notícia 02',
        }}
        likes={10}
      />
      <Post
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtítulo da notícia 03',
        }}
        likes={30}
      />
    </>
  );
}
