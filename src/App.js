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
  const [todos, dispatch] = useReducer(reducer, []);
  // const todos = getTodos();

  useEffect(() => {
    dispatch({ type: 'GET_TODOS', payload: initialState });
  }, []);

  const handleAddTodo = (todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const handleDeleteTodo = (todo) => {
    dispatch({ type: 'DELETE_TODO', payload: todo });
  };

  const handleUpdateTodo = (todo) => {
    setEditTodoView(!editTodoView);
    dispatch({ type: 'UPDATE_TODO', payload: todo });
  };
  // useEffect(() => {
  //   getTodos()
  //     .then((res) => {
  //       if (res.length) {
  //         setTodos(res);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('err:', err);
  //     });
  // }, []);
  console.log('todos:', todos);
  return (
    <div className='app'>
      <Header />
      <QuestForm onFormSubmit={handleAddTodo} />
      <QuestList
        todos={todos.todos}
        onTodoUpdate={handleUpdateTodo}
        onTodoDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
