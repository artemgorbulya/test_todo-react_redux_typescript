import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { Header, TodoPanel, TodoList } from './components';


import styles from './App.module.css';

export const App = () => (
  <Provider store={store}>
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header />
        <TodoPanel />
        <TodoList />
      </div>
    </div>
  </Provider>
);
