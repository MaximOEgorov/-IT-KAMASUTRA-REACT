import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
      </nav>
      <div>
        Main content
      </div>
    </div>
  );
}

export default App;
