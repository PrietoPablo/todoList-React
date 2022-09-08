import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import './TodoList.scss';

import Task from './Task/Task';

function TodoList({ tasks, toggleTaskDone, deleteTask }) {
  return (
    <div className="TodoList">
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            label={task.label}
            done={task.done}
            toggleTaskDone={toggleTaskDone}
            deleteTask={deleteTask}
          />
        ))}
      </ul>

      <Link to="/add-task">
        <button type="button">Add Task</button>
      </Link>
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoList;
