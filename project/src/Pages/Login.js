import { Button, TextField, Link, Grid, Paper, Box } from '@mui/material';
import { Component } from 'react';
import loginImg from '../Photos/LoginPhoto.gif';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null, 
    };

    this.buttonClicked = this.buttonClicked.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }


  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  buttonClicked = ()=> {
    this.props.history.push('/table');
  }

  render() {
    return (
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={7} >
            <Paper elevation="0" >
              <img src={loginImg} alt="Robot" style={{ width: '50%', height: 'auto' }} />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation="0" sx={{display: 'grid', flexDirection:'column', marginLeft:'-17%',  marginTop:'17%', position:'absolute'}}>
              <TextField
                id="outlined-input"
                label="Email ID"
                type="text"
                fullWidth="true"
                value={this.state.email}
                onChange={this.onEmailChange}
              />&nbsp;
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                fullWidth="true"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />&nbsp;
              <Button fullWidth="true" Color="Color.Primary" variant="contained" onClick={this.buttonClicked}>Login</Button>&nbsp;
              <Link href="#" underline="none">Forgot Username/Password?</Link>
            </Paper>
          </Grid>
        </Grid>
        </Box>
    );
  }
}

export default Login;
