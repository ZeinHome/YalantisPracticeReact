import './addTodo.css';

export default function AddTodo({ addTodo, validateForm, setErrors }) {
  const handleSubmit = event => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setErrors();
      addTodo();
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <button
      type="submit"
      className="button"
      onClick={event => handleSubmit(event)}
    >
      Add Todo
    </button>
  );
}
