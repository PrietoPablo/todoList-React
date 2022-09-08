import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

import './AddTask.scss';

function AddTask({ newTaskLabel, setNewTaskLabel, addTask }) {
  const navigate = useNavigate();

  return (
    <div className="AddTask">
      <Link to="/">
        <p>Return to task list</p>
      </Link>
      <form onSubmit={(event) => {
        event.preventDefault();
        addTask(newTaskLabel);
        navigate('/');
      }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskLabel}
          onChange={(event) => {
            setNewTaskLabel(event.target.value);
          }}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

AddTask.propTypes = {
  newTaskLabel: PropTypes.string.isRequired,
  setNewTaskLabel: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
