const Quest = ({ todo }) => {
  const handleToggleTodo = () => {
    // onTodoToggle()
  };

  const { id, title, completed, dateIssued } = todo;
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
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};
export default Quest;
