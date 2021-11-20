import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Postalot<br/> 
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const fetchUsers = () => { 
  //   fetch('https://postalot-server.herokuapp.com/api/users')
  //   .then(res => res.json())
  //   .then(user => console.log(user[0].username))
  // }

  const reqSignIn = {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
        email: email,
        password: password
    })
  }

  // const checkCredentials = ( userid,email,users ) => {
  //   for (let [key, value] of Object.entries(users)) {
  //       if (key === 'email' && email === value) {
  //         userid = users.id;
  //         return userid;
  //       }
  // }}

  const onSignIn = () => {
    fetch('https://postalot-server.herokuapp.com/api/users/login', reqSignIn)
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        props.loadUser(user);
        props.onRouteChange('Home');
      }
    });
  } 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate method="POST" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={onSignIn}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                  <a href='https://reactjs.org/docs/getting-started.html'>Forgot password?</a>
              </Grid>
              <Grid item>
                <a ><u><p id="register" onClick={() => props.onRouteChange('Register')}>
                  Don't have an account? Register
                </p></u></a>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}