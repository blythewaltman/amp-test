import logo from "./logo.svg";
import "./App.css";
import { API } from "aws-amplify";

function App() {
  async function sayHello() {
    try {
      const items = await API.get("myexpressserver", "/items");
      console.log(items);
    } catch (err) {
      console.log("error printing hello world", err);
    }
  }
  sayHello();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
