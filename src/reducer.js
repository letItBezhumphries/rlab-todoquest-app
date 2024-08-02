export default function (state, action) {
  // destructure action & state
  const { todos } = state;
  const { type, payload } = action;
  //
  console.log('state:', state);
  switch (type) {
    case 'GET_TODOS': {
      return {
        todos: payload,
      };
    }
    case 'ADD_TODO': {
      return {
        todos: [payload, ...todos],
      };
    }
    case 'DELETE_TODO': {
      return {
        todos: todos.filter((todo) => todo.id !== payload),
      };
    }
    case 'UPDATE_TODO_COMPLETED': {
      return {
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
    default: {
      throw Error('Unkown Action', type);
    }
  }
}
