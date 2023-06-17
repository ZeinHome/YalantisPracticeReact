import './sortButton.css';

export default function SortButton({ todos, setTodos }) {
  const sortListTodo = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateA - dateB;
    });

    setTodos(sortedTodos);
    console.log(todos);
  };

  return (
    <div className="sort-container ">
      <button className="sort__btn" onClick={sortListTodo}>
        Sort
      </button>
    </div>
  );
}
