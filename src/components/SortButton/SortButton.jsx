import './sortButton.css';
import moment from 'moment';

export default function SortButton({ todos, setTodos }) {
  const sortListTodo = () => {
    const sortedTodos = todos.sort((a, b) => {
      const dateA = moment(a.createAt, 'DD-MM-YYYY, HH:mm:ss');
      const dateB = moment(b.createAt, 'DD-MM-YYYY, HH:mm:ss');
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
