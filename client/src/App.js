import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageRender from "./components/PageRender";
import Login from './pages/login';


function App() {
  return (
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          <Route exact path="/" component={Login} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
