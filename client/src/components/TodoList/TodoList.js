import './TodoList.scss';

function TodoList() {
  return (
    <ul>
      <li className="Task">
        <span>
          <input type="checkbox" />
          1st task
        </span>
        <button type="button">Delete</button>
      </li>
      <li className="Task">
        <span>
          <input type="checkbox" />
          2nd task
        </span>
        <button type="button">Delete</button>
      </li>
    </ul>
  );
}

export default TodoList;
