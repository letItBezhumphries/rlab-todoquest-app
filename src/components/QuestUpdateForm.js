import { useState } from 'react';

const QuestUpdateForm = ({
  updateTodo,
  onSaveTodo,
  handleCloseEditTodoView,
}) => {
  const [newTitle, setNewTitle] = useState(updateTodo.title);

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
    // close the editTodoView
    handleCloseEditTodoView();
  };

  return (
    <li className='quest quest-update'>
      <form onSubmit={handleSubmit} className='quest-update-form'>
        <input type='checkbox' defaultChecked={updateTodo.completed} />
        <input
          type='text'
          value={newTitle}
          onChange={handleChange}
          name='title'
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </li>
  );
};
export default QuestUpdateForm;
