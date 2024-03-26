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
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));


  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center'
        }}
      >
        <Title variant="h1" sx={{ color: "#1C1F25" }}>
            Sign In
           </Title>
        <Typography component="h2" variant="h5" sx={{ fontSize: "18px" }}>
          Sign in and help educate and empower!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: "black", // Outline color on hover
                  },
                },
                '& .Mui-focused fieldset': {
                  borderColor: "black", // Outline color when focused
                },
               
                '& .MuiInputLabel-root.Mui-focused': {
                  color: "black", // Label color when focused
                },
              
              }}
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
            sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: "black", // Outline color on hover
                  },
                },
                '& .Mui-focused fieldset': {
                  borderColor: "black", // Outline color when focused
                },
               
                '& .MuiInputLabel-root.Mui-focused': {
                  color: "black", // Label color when focused
                },
               
              }}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{
              mt: 2,
              mb: 1,
              backgroundColor: "black", // Background color on hover
                color: "#fff", // Text color on hover
                // borderColor: "black", //
              '&:hover': {
                backgroundColor: "#fff", // Background color on hover
                color: "black", // Text color on hover
                borderColor: "black", // Outline color on hover
              },
            }}
          >
            Login
          </Button>
          <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  flexDirection="column"
  sx={{ mt: 2, mb: 1 }}
>
  {/* <Button
    type="submit"
    variant="contained"
    sx={{
      backgroundColor: "white", // Background color on hover
      color: "black", // Text color on hover
      '&:hover': {
        backgroundColor: "#blue", // Background color on hover
        color: "white", // Text color on hover
      },
    }}
  >
    <img
      src={heroImg}
      alt="Google Icon"
      style={{ width: '40px', height: '100%', marginRight: '10px' }}
    />
    Sign In with Google
  </Button> */}
</Box>
        </Box>
      </Box>
    </Container>
 

    </ThemeProvider>
  );
}