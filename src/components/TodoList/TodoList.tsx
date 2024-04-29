import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import { RootState } from '../../store/store';

import styles from './TodoList.module.css';

export const TodoList: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabs_container}>
        <button
          className={activeTab === 1 ? `${styles.tab}` : `${styles.tab_active}`}
          onClick={() => setActiveTab(0)}
        >
          Активні
        </button>
        <button
          className={activeTab === 0 ? `${styles.tab}` : `${styles.tab_active}`}
          onClick={() => setActiveTab(1)}
        >
          Видалені
        </button>
      </div>
      {activeTab === 0 &&
        todoList
          .filter((todo) => !todo.deleted)
          .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      {activeTab === 1 &&
        todoList
          .filter((todo) => todo.deleted)
          .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};
