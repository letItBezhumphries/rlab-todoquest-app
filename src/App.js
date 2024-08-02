import './App.css';
import Header from './components/Header';
import QuestForm from './components/QuestForm';
import QuestList from './components/QuestList';
import reducer from './reducer';
import { useEffect, useReducer, useState } from 'react';

/*
Bring in initial state of quests todos


*/
import initialState from './data';
import { faker } from '@faker-js/faker';

const getTodos = async () => {
  try {
    // let todos = await fetch(
    //   'https://jsonplaceholder.typicode.com/users/1/todos'
    // );
    // const data = await todos.json();

    // console.log('todos:', data);
    // return data;
    return initialState;
  } catch (error) {
    console.log('error');
  }
};

function App() {
  const [editTodoView, setEditTodoView] = useState(false);
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

  const handleUpdateTodo = (todo) => {
    // setEditTodoView(!editTodoView);
    dispatch({ type: 'UPDATE_TODO', payload: todo });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'UPDATE_TODO_COMPLETED', payload: id });
  };

  console.log('todos:', state.todos);
  return (
    <div className='app'>
      <Header />
      <QuestForm onFormSubmit={handleAddTodo} />
      <QuestList
        todos={state.todos}
        onTodoUpdate={handleUpdateTodo}
        onTodoDelete={handleDeleteTodo}
        onTodoToggle={handleToggleTodo}
      />
    </div>
  );
}

export default App;
