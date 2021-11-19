import './App.css';
import { useEffect, useState } from 'react';
import LoginPage from './Pages/LoginPage';
import TablePage from './Pages/TablePage';
import ImagePage from './Pages/ImagePage'
import AuthContext from './Pages/AuthContext'
import DatePicker from './components/DatePicker';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomePage from './Pages/HomePage';
import interceptors from './api/interceptors';



function App() {
  const history = createBrowserHistory();

  const [isAuth, setAuth] = useState(false);

  interceptors.setupInterceptors(history);

  return (

    <AuthContext.Provider value={isAuth}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/login"
            render={(props) => (
              <LoginPage {...props} setAuth={setAuth} />
            )}
          />
          <Route path="/table" component={TablePage} />
          <Route path="/upload" component={ImagePage} />
          <Route path="/datePicker" component={DatePicker} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
