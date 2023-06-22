import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Form from './components/Form/Form.jsx';
import ListTodo from './components/ListTodo/ListTodo.jsx';
import SortButton from './components/SortButton/SortButton.jsx';

export default function App() {
  const [errors, setErrors] = useState({});
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    id: '',
    title: '',
    description: '',
    completed: false,
    createdAt: '',
  });

  const styles = {
    section: { display: 'flex', justifyContent: 'center' },
    title: {
      fontWeight: '500',
      fontSize: '28px',
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      color: '#000000',
    },
  };

  const addTodo = () => {
    const currentDate = new Date().toLocaleString();
    const formattedDate = currentDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    const todoWithId = {
      ...newTodo,
      id: uuid(),
      createdAt: formattedDate,
    };

    setTodos(prev => [...prev, todoWithId]);
    setNewTodo({
      id: '',
      title: '',
      description: '',
      completed: false,
      createdAt: '',
    });
  };

  const onChangeTitle = event => {
    setNewTodo(prev => ({ ...prev, title: event.target.value }));
  };
  const onChangeDescription = event => {
    setNewTodo(prev => ({
      ...prev,
      description: event.target.value,
    }));
  };

  return (
    <section style={styles.section}>
      <SortButton todos={todos} setTodos={setTodos} />
      <div>
        <h1 style={styles.title}>Todo App</h1>
        <Form
          addTodo={addTodo}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          setErrors={setErrors}
          errors={errors}
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
        />
        <ul>
          <ListTodo
            todos={todos}
            setTodos={setTodos}
            onChangeTitle={onChangeTitle}
            onChangeDescription={onChangeDescription}
          />
        </ul>
      </div>
    </section>
  );
}
