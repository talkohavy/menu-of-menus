import "./App.css";
import NavBar from "./NavBar";
import { menuLinks } from "./constants";

function App() {
  return (
    <div className="App">
      <header className="header">
        Simple Pure CSS Drop Down Menu
        <NavBar menuLinks={menuLinks} />
      </header>
      <footer className="footer">This is the Footer</footer>
    </div>
  );
}

export default App;
