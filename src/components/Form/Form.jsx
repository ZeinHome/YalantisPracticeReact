import AddTodo from '../AddTodo/AddTodo';
import InputForm from '../InputForm/InputForm';
import './form.css';

export default function Form({
  onChangeTitle,
  onChangeDescription,
  addTodo,
  setErrors,
  errors,
  newTodo: { title, description },
}) {
  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }

    return newErrors;
  };

  return (
    <form className="form">
      <div className="containerForm">
        <InputForm
          errors={errors}
          title={title}
          description={description}
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
        />
      </div>
      <AddTodo
        addTodo={addTodo}
        validateForm={validateForm}
        setErrors={setErrors}
      />
    </form>
  );
}
