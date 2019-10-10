import React from 'react';
import './Global.css';

import Header from './components/header/header';
import PostList from './components/posts/PostList';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
