import logo from "./logo.svg";
import "./App.css";

function App() {
  const onClick = async () => {
    // const notify = await import("./notify");
    // try {
    //   notify.default();
    //   notify.consoleTest();
    // } catch (e) {
    //   console.log(e);
    // }

    import("./notify").then((result) => {
      result.default();
      result.consoleTest();
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={onClick}>Greeting!</button>
      </header>
    </div>
  );
}

export default App;
