import './addTodo.css';

export default function AddTodo({
  // eslint-disable-next-line react/prop-types
  addTodo,
  // eslint-disable-next-line react/prop-types
  validateForm,
  // eslint-disable-next-line react/prop-types
  setErrors,
}) {
  const handleSubmit = (event) => {
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
      onClick={(event) => handleSubmit(event)}
    >
      Add Todo
    </button>
  );
}
