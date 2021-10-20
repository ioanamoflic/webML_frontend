import { Button, TextField, Link, Grid, Paper, Box } from '@mui/material';

function Login() {
  return (
    <Box sx={{ m: 20 }}>
      <Grid container spacing={2} >
        <Grid item xs={7}>
          <Paper elevation="1">
            <img src={require('../Photos')} alt="ana" style={{ height: 500, width: 500, border: "2px solid black" }} />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper sx={{ display: 'flex', flexDirection: 'column'}} elevation="0">
            <TextField
              id="outlined-input"
              label="Email ID"
              type="text"
            />&nbsp;
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"

            />&nbsp;
            <Button fullWidth="true" Color="Color.Primary" variant="contained">Login</Button>&nbsp;
            <Link href="#" underline="none">Forgot Username/Password?</Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
