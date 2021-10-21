import React, { Component } from 'react'
import ImagePage from './ImagePage';
import TablePage from './TablePage';
import Login from './Login';

const AuthContext = React.createContext()

class AuthProvider extends Component {
  state = {
    isAuth: false,
  }

  setAuth = (auth) => {
    this.setState({isAuth: auth});
  }

  render() {
    const { isAuth } = this.state;
    const { setAuth } = this;

    return (
      <AuthContext.Provider
        value={{
          isAuth,
          setAuth,
        }}
      >
        <Login/>
        <ImagePage/>
        <TablePage/>
      </AuthContext.Provider>
    )
  }
}

export default AuthContext

export { AuthProvider }