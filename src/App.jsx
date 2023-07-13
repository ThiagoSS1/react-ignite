import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css'

function App () {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiago De Seta"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

          />

          <Post
            author="Thiago De Seta"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

          />

        </main>
      </div>
    </>
  )
}

export default App
