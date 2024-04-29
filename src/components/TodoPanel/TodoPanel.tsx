import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './TodoPanel.module.css';
import { addTodo } from '../../store/todoSlice';

const DEFAULT_TODO = { name: '', description: '' };

export const TodoPanel: React.FC = () => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);
  const dispatch = useDispatch()

  const onClick = () => {
    console.log('add todo', todo);
    dispatch(addTodo(todo));
    setTodo(DEFAULT_TODO);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <div className={styles.todo_panel_container}>
      <div className={styles.fields_container}>
        <div className={styles.field_container}>
          <label htmlFor='name'>
            <div>Назва</div>
            <input autoComplete='off' id='name' value={todo.name} onChange={onChange} name='name' />
          </label>
        </div>
        <div className={styles.field_container}>
          <label htmlFor='description'>
            <div>Опис</div>
            <input
              autoComplete='off'
              id='description'
              value={todo.description}
              onChange={onChange}
              name='description'
            />
          </label>
        </div>
      </div>
      <div className={styles.button_container}>
        <button className={styles.button_add} onClick={onClick}>
          Додати
        </button>
      </div>
    </div>
  );
};
