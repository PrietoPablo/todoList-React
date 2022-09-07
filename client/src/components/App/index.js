import TodoList from '../TodoList/TodoList';

import './App.scss';

// == Composant
function App() {
  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <TodoList />
    </div>
  );
}

// == Export
export default App;
