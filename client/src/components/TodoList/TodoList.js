import PropTypes from 'prop-types';
import './TodoList.scss';

import Task from './Task/Task';

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          label={task.label}
          done={task.done}
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
};

export default TodoList;
