import logo from './logo.svg';
import './App.css';
import ComponentManager from './components/componentManager'

function App() {
  return (
    <>
      <header className="App-header">
          <h2>Blog <span>React</span></h2>
          <ComponentManager/>
      </header>
    </>
  );
}

export default App;
