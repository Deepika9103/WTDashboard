// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import Swal from 'sweetalert2';
import Grid from '@mui/material/Grid';
import { oranged, indigo } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Profile() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const result = await axios.get(`https://wixstocle.pythonanywhere.com/api/user/tony@gmail.com`, {
      headers: { "Authorization": `Token 11c868750d92deda81638c5a9a59177bdc7ae41a` },
    });
    console.log(result.data.data);
    setUserData(result.data.data);
  }

  const handleChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleEdit = async () => {
    fetch(`https://wixstocle.pythonanywhere.com/api/user/tony@gmail.com`, {
      method: 'PUT',
      headers: {
        "Authorization": `Token 11c868750d92deda81638c5a9a59177bdc7ae41a`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.status == true) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully Edited the details',
            showConfirmButton: false,
            timer: 3000
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: data.message,
            showConfirmButton: false,
            timer: 3000
          })
        }
        loadList();
      });
  }

  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} >
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '120vh',
            overflow: 'auto',
          }}>
          <Toolbar />
          <Box style={{ margin: "0.5rem 1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Grid container spacing={1}>
                  <Grid item xs={12} style={{ marginLeft: "35%" }}>
                    <Avatar alt={userData.first_name} sx={{ width: 100, height: 100, bgcolor: "#F47F2A", fontSize: "2rem" }} > JS</Avatar>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Savings /> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Grid container spacing={2} >
                  <Grid item xs={12}>
                    <div style={{ textAlign: "left", marginBottom: "0.5rem", fontSize: "2rem", fontWeight: "650" }}>
                      Welcome to TIAA !!</div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>First Name</div>
                    <TextField
                      id="first_name"
                      name="first_name"
                      color='success'
                      value={userData.first_name}
                      onChange={(e) => handleChange('first_name', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Last Name</div>
                    <TextField
                      id="last_name"
                      name="last_name"
                      color='success'
                      value={userData.last_name}
                      onChange={(e) => handleChange('last_name', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Email</div>
                    <TextField
                      id="email"
                      type='email'
                      name="email"
                      color='success'
                      value={userData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Password</div>
                    <TextField
                      id="password"
                      type='password'
                      name="password"
                      color='success'
                      disabled
                      value={userData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Phone Number</div>
                    <TextField
                      id="phone_number"
                      name="phone_number"
                      color='success'
                      value={userData.phone_number}
                      onChange={(e) => handleChange('phone_number', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Date of Birth</div>
                    <TextField
                      id="dob"
                      type="date"
                      name="dob"
                      color='success'
                      value={userData.dob}
                      onChange={(e) => handleChange('dob', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Address</div>
                    <TextField
                      id="address"
                      name="address"
                      color='success'
                      value={userData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Spouse Name</div>
                    <TextField
                      id="spouse_name"
                      name="spouse_name"
                      color='success'
                      value={userData.spouse_name}
                      onChange={(e) => handleChange('spouse_name', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Spouse DOB</div>
                    <TextField
                      id="spouse_dob"
                      type="date"
                      name="spouse_dob"
                      color='success'
                      value={userData.spouse_dob}
                      onChange={(e) => handleChange('spouse_dob', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Gender</div>
                    <TextField
                      id="gender"
                      name="gender"
                      color='success'
                      value={userData.gender}
                      onChange={(e) => handleChange('gender', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div style={{ textAlign: "left", fontSize: "0.78rem" }}>Spouse Gender</div>
                    <TextField
                      id="spouse_gender"
                      name="spouse_gender"
                      color='success'
                      value={userData.spouse_gender}
                      onChange={(e) => handleChange('spouse_gender', e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button variant="contained" type="submit"
                      sx={{
                        width: "100%", height: "3.5rem", fontSize: "1.1rem",
                        backgroundColor: "#F47F2A", boxShadow: "none", color: "white", marginTop: "1rem",
                        textTransform: "capitalize"
                        , "&:hover": {
                          backgroundColor: "white !important", boxShadow: "none", color: "#F47F2A",
                          fontSize: "1.3rem", cursor: "pointer"
                        }
                      }} onClick={handleEdit}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}