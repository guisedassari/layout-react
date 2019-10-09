import React from 'react';
import './Global.css';

import Header from './components/header/header';
import PostList from './components/posts/postList';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
