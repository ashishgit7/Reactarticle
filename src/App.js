import './App.css';
import Article from './components/Article'

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark  bg-dark">
          <div className="container-fluid ">
            <span className="navbar-brand mb-0 h1 m-auto">Article</span>
          </div>
        </nav>
        <Article/>
    </div>
  );
}

export default App;
