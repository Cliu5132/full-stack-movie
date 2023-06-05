import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Section-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Section-header">
          <p>
            Full Stack Movie App
          </p>
        </div>
        <div className="Section-header">
          <a
            className="App-link"
            href="https://github.com/Cliu5132/full-stack-movie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </div>
      </header>
      <div className="App-Main">
        <Form />
      </div>
      <footer className="App-footer">
        <p>All rights reserved &copy; <a href="http://www.mrcongliu.com">MrCongLiu</a></p>
      </footer>
    </div>
  );
}

export default App;
