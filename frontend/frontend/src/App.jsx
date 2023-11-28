import "./App.css";
import NavBar from "./components/NavBar";
import Characteristics from "./sections/Characteristics.jsx";
import History from "./sections/History.jsx";
import Versions from "./sections/Versions.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./pages/LogIn.jsx"

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/login" Component={LogIn}/>
          </Switch>

        </Router>
      <div className="principal-container">
        <h1>
           Descubre el Poder de la Libertad:
          <br />
          Explorando el Mundo de Linux
        </h1>
        <History />
        <Characteristics />
      </div>
      <div>
        <Versions />
      </div>
    </div>
  );
}

export default App
