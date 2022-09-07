import PropTypes from 'prop-types';
import './TodoList.scss';

import Task from './Task/Task';

function TodoList({ tasks, toggleTaskDone }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          label={task.label}
          done={task.done}
          toggleTaskDone={toggleTaskDone}
        />
      ))}
    </ul>
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
};

export default TodoList;
