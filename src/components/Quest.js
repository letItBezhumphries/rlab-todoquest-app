const Quest = ({ todo, onTodoUpdate, onTodoDelete, onTodoToggle }) => {
  const { id, title, completed } = todo;
  const handleToggleTodo = () => {
    onTodoToggle(id);
  };

  const handleDeleteTodo = () => {
    console.log('id:', id);
    onTodoDelete(id);
  };

  const handleUpdateTodo = () => {
    onTodoUpdate(todo);
  };

  return (
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
  );
};
export default Quest;
