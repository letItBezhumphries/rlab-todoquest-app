import { useState } from 'react';

const QuestUpdateForm = ({ updateTodo, onTodoUpdate }) => {
  const [newTitle, setNewTitle] = useState('');
  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...updateTodo,
      title: newTitle,
    };

    onTodoUpdate(newTodo);
    setNewTitle('');
  };

  return (
    <li className='quest'>
      <form onSubmit={handleSubmit}>
        <input
          type='checkbox'
          checked={completed}
          onChange={handleToggleTodo}
        />
        <input
          type='text'
          value={updateTodo.title}
          onChange={handleChange}
          name='title'
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </li>
  );
};
export default QuestUpdateForm;
