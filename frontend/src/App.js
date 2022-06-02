import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import CreatePost from './components/createPost';
import Posts from './components/posts';

function App() {
  return (
    <>
      <header className="App-header">
          <h2>Blog <span>React</span></h2>
          <Login/>
          <Register/>
          <CreatePost/>
          <Posts/>
      </header>
    </>
  );
}

export default App;
