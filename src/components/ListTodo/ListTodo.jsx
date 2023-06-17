import './listTodo.css';

export default function ListTodo({
  todos,

  setTodos,
}) {
  const onChangeCompleted = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleChangeTitle = (event, id) => {
    const updatedTodos = todos?.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title: event.target.value,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleChangeDescription = (event, id) => {
    const updatedTodos = todos?.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          description: event.target.value,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map(({ id, title, description, completed }) => (
        <li key={id} className="todo-item ">
          <h2
            className="todo-title "
            style={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
          >
            {`Title: ${title}`}
          </h2>
          <p className="todo-description">{`Description: ${description}`}</p>
          <button
            type="button"
            className="todo-button"
            onClick={() => onChangeCompleted(id)}
          >
            {completed ? 'Uncomplete' : 'Complete'}
          </button>
          <button
            type="button"
            className="delete-button"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
          <div className="change-container">
            <input
              type="text"
              placeholder="Title"
              className="input"
              value={title}
              onChange={event => handleChangeTitle(event, id)}
            />

            <input
              type="text"
              placeholder="Description"
              className="input"
              value={description}
              onChange={event => handleChangeDescription(event, id)}
            />
          </div>
        </li>
      ))}
    </>
  );
}
