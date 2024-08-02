import { useState, useEffect } from 'react';

const QuestForm = ({ onFormSubmit, editTodoView, todoToUpdate }) => {
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    if (editTodoView) {
      setTodoTitle(todoToUpdate.title);
    }
  }, [editTodoView]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: todoTitle,
      completed: false,
      dateIssued: Date.now(),
    };

    onFormSubmit(newTodo);
  };

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <form
      className={editTodoView ? 'quest-add-form' : 'edit-form'}
      onSubmit={handleSubmit}
    >
      {!editTodoView ? (
        <h3>⚔️ Add an adventure from your bucket list or just a todo ⚔️</h3>
      ) : null}
      <div className='form-inputs-container'>
        <input
          type='text'
          value={todoTitle}
          onChange={handleChange}
          placeholder={editTodoView ? todoToUpdate : '...Add an adventure'}
          name='title'
        />
      </div>
      <div className='buttons-container'>
        <button onClick={handleSubmit} disabled={!completed}>
          Add
        </button>
      </div>
    </form>
  );
};
export default QuestForm;
