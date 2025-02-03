// import Text from '../components/Text/Text';
import { useState } from 'react';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = inputValue => {
    const searchResults = {
      id: todos.length + 1,
      text: inputValue,
    };
    setTodos(prev => [...prev, searchResults]);

    // crypto.randomUUID()
    console.log(searchResults);
  };
  


  const deleteTodos = () => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />

      <TodoList todos={todos} deleteTodos={deleteTodos} />
    </>
  );
};

export default Todos;
