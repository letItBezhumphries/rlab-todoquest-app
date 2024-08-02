import Quest from './Quest';

const QuestList = ({
  quests,
  todos,
  onTodoUpdate,
  onTodoDelete,
  onTodoToggle,
  updateTodo,
}) => {
  console.log('in QuestList -> todos:', todos);
  return (
    <div className='quest-list-container'>
      <h3>QuestList or Todos</h3>
      <ul>
        {todos && todos.length > 0
          ? todos.map((t) => (
              <Quest
                key={t.dataIssued}
                todo={t}
                onTodoUpdate={onTodoUpdate}
                onTodoDelete={onTodoDelete}
                onTodoToggle={onTodoToggle}
              />
            ))
          : null}
        {updateTodo !== undefined ? (
          <QuestUpdateForm
            onTodoUpdate={onTodoUpdate}
            updateTodo={updateTodo}
          />
        ) : null}
      </ul>
    </div>
  );
};
export default QuestList;
