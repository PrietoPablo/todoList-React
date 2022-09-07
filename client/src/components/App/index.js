import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';

import './App.scss';

function App() {
  const [tasks, setTasks] = useState([]);

  const toggleTaskDone = (taskId) => {
    axios.put(`http://localhost:3000/tasks/${taskId}`)
      .then(() => {
        const updateTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              done: !task.done,
            };
          }
          return task;
        });

        setTasks(updateTasks);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      <TodoList tasks={tasks} toggleTaskDone={toggleTaskDone} />
    </div>
  );
}

export default App;
