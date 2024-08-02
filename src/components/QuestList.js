import Quest from './Quest';

const QuestList = ({ quests, todos }) => {
  console.log('in QuestList -> todos:', todos);
  return (
    <div className='quest-list-container'>
      <h3>QuestList</h3>
      <ul>
        {todos && todos.length > 0
          ? todos.map((t) => <Quest key={t.id} todo={t} />)
          : null}
      </ul>
    </div>
  );
};
export default QuestList;
