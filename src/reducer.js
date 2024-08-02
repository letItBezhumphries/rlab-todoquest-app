export default function (state, action) {
  // destructure action
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
        todos: [payload, ...state.todos],
      };
    }
    case 'DELETE_TODO': {
      return {
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    }
    case 'UPDATE_TODO': {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== payload.id
      );
      return {
        todos: [...filteredTodos, payload],
      };
    }
  }
}
