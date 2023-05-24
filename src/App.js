import './App.css';
import { Provider } from 'react-redux';
import TodoList from './components/todolist/todolist';
import  store  from './components/store/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList</h1>
        <Provider store={store}>
          <TodoList />
        </Provider>
      </header>
    </div>
  );
}

export default App;

