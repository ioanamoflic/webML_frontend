import './App.css';
import Login from './Pages/Login';
import TablePage from './Pages/TablePage';
import ImagePage from './Pages/ImagePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    // <Login></Login>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/upload">
         <ImagePage></ImagePage>
        </Route>
      </Switch>
    </div>
  </Router>

    //TODO: implement routing
  );
}

export default App;
