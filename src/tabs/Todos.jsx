// import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const saveTodos = JSON.parse(localStorage.getItem('todos'))
    return saveTodos ? saveTodos : []
  } );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addNewTodo = inputValue => {
    
    const searchResults = {
      id: crypto.randomUUID(),
      text: inputValue,
    };
    setTodos(prev => [...prev, searchResults]);

    // crypto.randomUUID()
    console.log(searchResults);
  };
  


  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  

  
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />

      <TodoList todos={todos} onDelete={deleteTodos} />
    </>
  );
};

export default Todos;
