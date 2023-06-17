import AddTodo from '../AddTodo/AddTodo';
import InputForm from '../InputForm/InputForm';
import './form.css';

export default function Form({
  // eslint-disable-next-line react/prop-types
  onChangeTitle,
  // eslint-disable-next-line react/prop-types
  onChangeDescription,
  // eslint-disable-next-line react/prop-types
  addTodo,
  // eslint-disable-next-line react/prop-types
  setErrors,
  // eslint-disable-next-line react/prop-types
  errors,
  // eslint-disable-next-line react/prop-types
  newTodo: { title, description },
}) {
  const validateForm = () => {
    const newErrors = {};

    // eslint-disable-next-line react/prop-types
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    // eslint-disable-next-line react/prop-types
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
