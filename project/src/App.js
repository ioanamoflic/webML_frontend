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
  );
}

export default App;
