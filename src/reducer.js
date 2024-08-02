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
    case 'UPDATE_TODO': {
      if (payload === 0) {
        return {
          todos: todos.slice(1),
          updateTodo: todos[0],
        };
      } else if (payload === todos.length - 1) {
        return {
          todos: todos.slice(0, todos.length - 1),
          updateTodo: todos[todos.length - 1],
        };
      } else {
        const beforeTodo = todos.slice(0, payload - 1);
        const afterTodo = todos.slice(payload + 1);
        return {
          todos: [...beforeTodo, todos[payload], ...afterTodo],
          updateTodo: todos[payload],
        };
      }
    }
    default: {
      throw Error('Unkown Action', type);
    }
  }
}
