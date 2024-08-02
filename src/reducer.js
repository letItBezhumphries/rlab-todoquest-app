export default function (state, action) {
  // destructure action & state
  const { todos } = state;
  const { type, payload } = action;
  //
  console.log('state:', state);
  switch (type) {
    case 'GET_TODOS': {
      return {
        updateTodo: {},
        todos: payload,
      };
    }
    case 'ADD_TODO': {
      return {
        updateTodo: {},
        todos: [payload, ...todos],
      };
    }
    case 'DELETE_TODO': {
      return {
        updateTodo: {},
        todos: todos.filter((todo) => todo.id !== payload),
      };
    }
    case 'UPDATE_TODO_COMPLETED': {
      return {
        updateTodo: {},
        todos: todos.map((todo) =>
          todo.id === payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };
    }
    case 'SET_TODO_TO_UPDATE': {
      return {
        updateTodo: {
          ...payload,
        },
        todos: todos,
      };
    }
    case 'SAVE_TODO': {
      return {
        updateTodo: {},
        todos: todos.map((todo) =>
          todo.id === payload.id
            ? {
                ...todo,
                title: payload.title,
              }
            : todo
        ),
      };
    }
    default: {
      throw Error('Unkown Action', type);
    }
  }
}
