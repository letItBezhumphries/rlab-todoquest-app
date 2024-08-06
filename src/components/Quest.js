import { useState } from 'react';
import QuestUpdateForm from './QuestUpdateForm';

const Quest = ({
  todo,
  onEditTodo,
  onTodoDelete,
  onTodoToggle,
  updateTodo,
  onSaveTodo,
}) => {
  const { id, title, completed } = todo;
  const [editTodoView, setEditTodoView] = useState(false);
  const handleToggleTodo = () => {
    onTodoToggle(id);
  };

  const handleDeleteTodo = () => {
    console.log('id:', id);
    onTodoDelete(id);
  };

  const handleUpdateTodo = () => {
    setEditTodoView(true);
    onEditTodo(todo);
  };

  const handleCloseEditTodoView = () => {
    setEditTodoView(false);
  };

  console.log('editTodoView state:', editTodoView);

  return (
    <>
      {editTodoView ? (
        <QuestUpdateForm
          updateTodo={updateTodo}
          onSaveTodo={onSaveTodo}
          handleCloseEditTodoView={handleCloseEditTodoView}
        />
      ) : (
        <li className='quest'>
          <div>
            <input
              type='checkbox'
              checked={completed}
              onChange={handleToggleTodo}
            />
            <span
              className={completed ? 'completed' : 'incompleted'}
              style={completed ? { textDecoration: 'line-through' } : {}}
            >
              {title}
            </span>
          </div>
          <div>
            <button onClick={handleUpdateTodo}>Edit</button>
            <button
              onClick={handleDeleteTodo}
              className={completed ? 'delete-btn' : 'delete-btn-disabled'}
              disabled={!completed}
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </>
  );
};
export default Quest;
