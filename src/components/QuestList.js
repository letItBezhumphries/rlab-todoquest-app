import Quest from './Quest';
import QuestUpdateForm from './QuestUpdateForm';

const QuestList = ({
  quests,
  todos,
  onSaveTodo,
  onEditTodo,
  // editTodoView,
  onTodoDelete,
  onTodoToggle,
  updateTodo,
}) => {
  console.log('in QuestList -> todos:', todos, updateTodo);
  return (
    <div className='quest-list-container'>
      <h3>QuestList or Todos</h3>
      <ul>
        {todos && todos.length > 0
          ? todos.map((t) => (
              <Quest
                key={t.title}
                todo={t}
                onEditTodo={onEditTodo}
                onTodoDelete={onTodoDelete}
                onTodoToggle={onTodoToggle}
                onSaveTodo={onSaveTodo}
                updateTodo={updateTodo}
              />
            ))
          : null}
        {/* {updateTodo && editTodoView ? (
          <QuestUpdateForm onSaveTodo={onSaveTodo} updateTodo={updateTodo} />
        ) : null} */}
      </ul>
    </div>
  );
};
export default QuestList;
