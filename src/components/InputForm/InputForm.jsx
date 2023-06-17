export default function InputForm({
  // eslint-disable-next-line react/prop-types
  onChangeDescription,
  // eslint-disable-next-line react/prop-types
  onChangeTitle,
  // eslint-disable-next-line react/prop-types
  errors,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  description,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        className="input"
        value={title}
        onChange={(event) => onChangeTitle(event)}
      />
      {
        // eslint-disable-next-line react/prop-types
        errors?.title && (
          // eslint-disable-next-line react/prop-types
          <p className="error-message">{errors.title}</p>
        )
      }
      <input
        type="text"
        placeholder="Description"
        className="input"
        value={description}
        onChange={(event) => onChangeDescription(event)}
      />
      {
        // eslint-disable-next-line react/prop-types
        errors?.description && (
          // eslint-disable-next-line react/prop-types
          <p className="error-message">{errors.description}</p>
        )
      }
    </>
  );
}
