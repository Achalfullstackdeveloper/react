import logo from "./logo.svg";
import "./App.css";
// import { Audio } from "react-loader-spinner";
function login(){
return document.getElementById('demo').innerHTML ="login succesful";
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="app">
          <input type="text"placeholder="username"></input>
          <input type="text"placeholder="Password"></input>
          <button onClick={login} >Submit</button>
        </div>
        <p id = "demo"></p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;