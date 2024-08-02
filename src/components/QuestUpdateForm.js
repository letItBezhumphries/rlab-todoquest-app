import { useState } from 'react';

const QuestUpdateForm = ({ updateTodo, onSaveTodo }) => {
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

    onSaveTodo(newTodo);
    setNewTitle('');
  };

  return (
    <li className='quest quest-update'>
      <form onSubmit={handleSubmit} className='quest-update-form'>
        <input type='checkbox' defaultChecked={updateTodo.completed} />
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
