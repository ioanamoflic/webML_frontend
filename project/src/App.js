import './App.css';
import { useState } from 'react';
import Login from './Pages/Login';
import TablePage from './Pages/TablePage';
import ImagePage from './Pages/ImagePage'
import AuthContext from './Pages/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/table" component={TablePage} />
          <Route path="/upload" component={ImagePage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
