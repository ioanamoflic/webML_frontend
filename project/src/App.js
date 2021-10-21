import './App.css';
import Login from './Pages/Login';
import TablePage from './Pages/TablePage';
import ImagePage from './Pages/ImagePage'
import {AuthContext} from './Pages/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/table" component={TablePage}/>
        <Route path="/upload" component={ImagePage}/>
      </Switch>
  </Router>
  );
}

export default App;
