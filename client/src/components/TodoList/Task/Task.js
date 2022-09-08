import PropTypes from 'prop-types';

function Task({
  id, label, done, toggleTaskDone, deleteTask
}) {
  return (
    <li className="Task">
      <span>
        <input
          id={`task-${id}`}
          type="checkbox"
          checked={done}
          onChange={() => toggleTaskDone(id)}
        />
        {label}
      </span>
      <button type="button" onClick={() => deleteTask(id)}>Delete</button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
