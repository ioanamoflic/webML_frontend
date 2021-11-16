import { Button, TextField, Link, Grid, Paper, Box } from '@mui/material';
import React,{ Component, useEffect } from 'react';
import loginImg from '../Photos/LoginPhoto.gif';
import AuthContext from './AuthContext';
import { useContext } from 'react';

export default function LoginPage() {
  
  const value = useContext(AuthContext);
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);

  // function onEmailChange(event) {
  //   setEmail(event.target.value)
  // }

  // function onPasswordChange(event) {
  //   setPassword(event.target.value)
  // }


  // const buttonClicked = ()=> {
  //   props.history.push('/table');
  //   value.setAuth(true);
  // }

    return (
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={7} >
            <Paper elevation={0} >
              <img src={loginImg} alt="Robot" style={{ width: '50%', height: 'auto' }} />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={0} sx={{display: 'grid', flexDirection:'column', marginLeft:'-17%',  marginTop:'17%', position:'absolute'}}>
              <TextField
                id="outlined-input"
                label="Email ID"
                type="text"
                value={email}
                // onChange={(e) => onEmailChange(e)}
              />&nbsp;
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                value={password}
                // onChange={(e) => onPasswordChange(e)}
              />&nbsp;
              <Button variant="contained">Login</Button>&nbsp;
              <Link href="#" underline="none">Forgot Username/Password?</Link>
            </Paper>
          </Grid>
        </Grid>
        </Box>
    );
  
}


