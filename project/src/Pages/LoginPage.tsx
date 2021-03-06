import { Button, TextField, Link, Grid, Paper, Box } from '@mui/material';
import React from 'react';
import loginImg from '../Photos/LoginPhoto.gif';
import AuthContext from './AuthContext';
import { useContext } from 'react';
import useAuth from "../api/hooks/useAuth"

export default function LoginPage(props: any) {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

   const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((event.target).value)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((event.target).value)
  }

  const buttonClicked = async ()=> {
    useAuth.login(email,password).then(response=>{
      if (response.token) {
        console.log(response.token);
        localStorage.setItem("token", response.token);
        props.history.push('/table');
        props.setAuth(true);
    }
    }).catch(error=>{
      alert("Eroare");
    })

  }

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
                onChange={onEmailChange}
              />&nbsp;
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                value={password}
                onChange={onPasswordChange}
              />&nbsp;
              <Button variant="contained" onClick={buttonClicked}>Login</Button>&nbsp;
              <Link href="#" underline="none">Forgot Username/Password?</Link>
            </Paper>
          </Grid>
        </Grid>
        </Box>
    );
  
}


