import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';

import './App.scss';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/tasks')
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
