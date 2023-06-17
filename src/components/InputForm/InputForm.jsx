export default function InputForm({
  onChangeDescription,

  onChangeTitle,

  errors,

  title,

  description,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        className="input"
        value={title}
        onChange={event => onChangeTitle(event)}
      />
      {errors?.title && <p className="error-message">{errors.title}</p>}
      <input
        type="text"
        placeholder="Description"
        className="input"
        value={description}
        onChange={event => onChangeDescription(event)}
      />
      {errors?.description && (
        <p className="error-message">{errors.description}</p>
      )}
    </>
  );
}
