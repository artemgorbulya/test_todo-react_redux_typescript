import React from 'react';

import { useDispatch } from 'react-redux';
import styles from './TodoItem.module.css';
import { changeCheckedById, deleteById } from '../../../store/todoSlice';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.todo_item_container} style={{ opacity: todo.checked ? 0.8 : 1 }}>
      <div>
        <div
          aria-hidden
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none'
          }}
          onClick={() => dispatch(changeCheckedById(todo.id))}
          className={styles.todo_item_title}
        >
          {todo.name}
        </div>
        <div
          aria-hidden
          onClick={() => dispatch(changeCheckedById(todo.id))}
          className={styles.todo_item_description}
        >
          {todo.description}
        </div>
      </div>
      {!todo.deleted && (
        <div className={styles.todo_item_button_container}>
          <button
            className={styles.todo_item_button_delete}
            onClick={() => dispatch(deleteById(todo.id))}
          >
            Видалити
          </button>
        </div>
      )}
    </div>
  );
};
