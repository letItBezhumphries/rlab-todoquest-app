import './App.css';
import Header from './components/Header';
import QuestForm from './components/QuestForm';
import QuestList from './components/QuestList';
import reducer from './reducer';
import { useReducer } from 'react';

/*
Bring in initial state of quests todos


*/
import initialState from './data';
import { faker } from '@faker-js/faker';

function App() {
  // const [editTodoView, setEditTodoView] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  // const todos = getTodos();

  // useEffect(() => {
  //   dispatch({ type: 'GET_TODOS', payload: initialState });
  // }, []);

  const handleAddTodo = (todo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: faker.string.uuid().split('-').join(''),
        ...todo,
        dateIssued: Date.now(),
      },
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleSaveTodo = (todo) => {
    dispatch({ type: 'SAVE_TODO', payload: todo });
  };

  const handleEditTodo = (todo) => {
    dispatch({ type: 'SET_TODO_TO_UPDATE', payload: todo });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'UPDATE_TODO_COMPLETED', payload: id });
  };

  // console.log('todos:', state.todos);
  return (
    <div className='app'>
      <Header />
      <QuestForm onFormSubmit={handleAddTodo} />
      <QuestList
        todos={state.todos}
        onEditTodo={handleEditTodo}
        onSaveTodo={handleSaveTodo}
        onTodoDelete={handleDeleteTodo}
        onTodoToggle={handleToggleTodo}
        updateTodo={state.updateTodo}
      />
    </div>
  );
}

export default App;
