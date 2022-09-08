import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import TodoList from '../TodoList/TodoList';
import AddTask from '../AddTask/AddTask';

import './App.scss';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const addTask = (label) => {
    axios.post('http://localhost:3000/tasks', { label: label })
      .then((res) => {
        const newTask = res.data;
        setTasks([...tasks, newTask]);
        setNewTaskLabel('');
      })
      .catch((err) => {
        console.error(err);
      });
  };

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

  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:3000/tasks/${taskId}`)
      .then(() => {
        // seems to be handled on the server side but i will do it like
        // this for immutability, i will document myself on that point
        const filteredTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(filteredTasks);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const undoneTasksNumber = tasks.filter((task) => !task.done).length;

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
      <h1>Task List ({undoneTasksNumber} undone)</h1>
      <Routes>
        <Route
          path="/"
          element={(
            <TodoList
              tasks={tasks}
              toggleTaskDone={toggleTaskDone}
              deleteTask={deleteTask}
            />
          )}
        />
        <Route
          path="add-task"
          element={(
            <AddTask
              newTaskLabel={newTaskLabel}
              setNewTaskLabel={setNewTaskLabel}
              addTask={addTask}
            />
          )}
        />
      </Routes>

    </div>
  );
}

export default App;
