import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id);
    setTodo(t.todo);

    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  const toggleFinished = (e) => {
    setShowFinished(!showFinished);
  };

  return (
    <>
      <Navbar />
      <Content
        todo={todo}
        todos={todos}
        showFinished={showFinished}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleCheckbox={handleCheckbox}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        toggleFinished={toggleFinished}
      />
    </>
  );
}

export default App;

