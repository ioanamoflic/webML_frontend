import './App.css';
import { useState } from 'react';
import LoginPage from './Pages/LoginPage';
import TablePage from './Pages/TablePage';
import ImagePage from './Pages/ImagePage'
import AuthContext from './Pages/AuthContext'
import DatePicker from './components/DatePicker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [isAuth, setAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider  value={isAuth}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/table" component={TablePage} />
          <Route path="/upload" component={ImagePage} />
          <Route path="/datePicker" component={DatePicker} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
