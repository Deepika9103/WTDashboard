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
                    borderColor: "#F47F2A", // Outline color on hover
                  },
                },
                '& .Mui-focused fieldset': {
                  borderColor: "#F47F2A", // Outline color when focused
                },
               
                '& .MuiInputLabel-root.Mui-focused': {
                  color: "#F47F2A", // Label color when focused
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
                    borderColor: "#F47F2A", // Outline color on hover
                  },
                },
                '& .Mui-focused fieldset': {
                  borderColor: "#F47F2A", // Outline color when focused
                },
               
                '& .MuiInputLabel-root.Mui-focused': {
                  color: "#F47F2A", // Label color when focused
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
              backgroundColor: "#F47F2A", // Background color on hover
                color: "#fff", // Text color on hover
                // borderColor: "#F47F2A", //
              '&:hover': {
                backgroundColor: "#fff", // Background color on hover
                color: "#F47F2A", // Text color on hover
                borderColor: "#F47F2A", // Outline color on hover
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
<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
</Box>
        </Box>
      </Box>
    </Container>
    <div style={{ marginTop: "2.5rem", marginBottom: "-1rem" }}>
  <svg
    style={{
      position: 'relative',
      width: '100%',
      height: '21vh',
    }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    shapeRendering="auto"
  >
    <defs>
      <path
        id="gentle-wave"
        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
      />
    </defs>
    <g className="parallax">
      <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,165,0,0.7)" />
      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,165,0,0.5)" />
      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,165,0,0.3)" />
      <use xlinkHref="#gentle-wave" x="48" y="7" fill="#F47F2A" />
    </g>
  </svg>
  <style>
    {`
      .parallax > use {
        animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
      }
      .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }
      .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }
      .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }
      .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }
      @keyframes move-forever {
        0% {
          transform: translate3d(-90px,0,0);
        }
        100% { 
          transform: translate3d(85px,0,0);
        }
      }
      @media (max-width: 768px) {
        .waves {
          height: 40px;
          min-height: 40px;
        }
      }
    `}
  </style>
</div>


    </ThemeProvider>
  );
}