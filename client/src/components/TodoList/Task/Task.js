import PropTypes from 'prop-types';

function Task({ id, label, done }) {
  return (
    <li className="Task">
      <span>
        <input id={`task-${id}`} type="checkbox" checked={done} />
        {label}
      </span>
      <button type="button">Delete</button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
