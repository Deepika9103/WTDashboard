import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from "@mui/material";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();
const responseMessage = (response) => {
    navigate('/dashboard')

    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const searchData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    fetch(`https://wixstocle.pythonanywhere.com/api/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchData),
    }).then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.status == true) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully Logged In',
            showConfirmButton: false,
            timer: 3000
          })
          navigate('/')
        }
        else {
          Swal.fire({
            icon: 'error',
            title: data.message,
            showConfirmButton: false,
            timer: 3000
          })
        }
      })
      .catch((error) => {
        // console.error(error);
      });

  };
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#000336",
    fontWeight: "bold",
    textAlign: "center",
    margin: theme.spacing(4, 0, 1, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));


  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box component="form" onSubmit={handleSubmit}
          sx={{
            my: 3,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Title variant="h1" sx={{ color: "#1C1F25" }}>
          Welcome Back !
           </Title>
          <Typography component="h3" >
          Enter your email and password to access your account
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              autoComplete="current-password"
            />
             <Grid container>
             <Grid item xs>
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </Grid>
              <Grid item >
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: "black", // Background color on hover
                color: "#fff", // Text color on hover
                textTransform: 'none',
              '&:hover': {
                backgroundColor: "#fff", // Background color on hover
                color: "black", // Text color on hover
                borderColor: "#black", // Outline color on hover
              },
            }}
          >
            Sign In
          </Button>
          
          <Grid container alignItems="center">
      <Grid item xs={3.5}>
        <hr style={{ border: '1px solid grey' }} />
      </Grid>
      <Grid item xs={5} container justifyContent="center">
        <Typography variant="body1" align="center" color="grey">
          Or continue with email
        </Typography>
      </Grid>
      <Grid item xs={3.5}>
        <hr style={{ border: '1px solid grey' }} />
      </Grid>
    </Grid>
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  flexDirection="column"
  sx={{ mt: 2, mb: 1 }}
>

<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
</Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}