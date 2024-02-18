import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import heroImg_3 from "../../media/img_3.jpeg";
const Properties = () => {
  const StyledTypography = styled(Typography)({
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3, // Limit to 3 lines
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    marginBottom: '20px',
  }));
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
  const Title_2 = styled(Typography)(({ theme }) => ({
    color: "#000336",
    textAlign: "center",
    margin: theme.spacing(4, 0, 4, 0),

  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 2, background: "linear-gradient(#387FF5, #fff)", py:3 }}>
      <Container>
        
        <PropertiesTextBox>
          <Title variant="h1" sx={{ color: "#1C1F25" }}>
            Our Services
          </Title>
          <Typography sx={{ fontSize: "16px", mt: 1, textAlign: "center" }}>
  Elevate your creative vision with our expertise in Visual Effects (VFX) and 3D Animations. From crafting stunning visuals to bringing imagination to life, we empower your projects with cutting-edge technology and artistic finesse.
</Typography>
</PropertiesTextBox>

<Box sx={{ width: '100%', mt: 10 }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
      <Item>
        <Typography
          variant="body2"
          sx={{
            fontSize: "22px",
            color: "#1C1F25",
            fontWeight: "bold",
          }}
        >
          VFX and 3D Animations
        </Typography>
        <StyledTypography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Transform your storytelling with our expertise in VFX and 3D Animations. We bring narratives to life, creating immersive experiences through stunning visual effects and dynamic animations that captivate and engage your audience.
        </StyledTypography>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
        <Typography
          variant="body2"
          sx={{
            fontSize: "22px",
            color: "#1C1F25",
            fontWeight: "bold",
          }}
        >
          Trailer and Digital Campaigns
        </Typography>
        <StyledTypography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Ignite excitement and anticipation with our Trailer and Digital Campaign services. We craft compelling trailers and execute strategic digital campaigns that elevate your brand, leaving a lasting impact on your audience.
        </StyledTypography>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
        <Typography
          variant="body2"
          sx={{
            fontSize: "22px",
            color: "#1C1F25",
            fontWeight: "bold",
          }}
        >
          Production and Design
        </Typography>
        <StyledTypography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Unleash creativity and innovation with our Production and Design services. We offer end-to-end solutions, from conceptualization to execution, ensuring seamless production and captivating designs that set your brand apart.
        </StyledTypography>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
        <Typography
          variant="body2"
          sx={{
            fontSize: "22px",
            color: "#1C1F25",
            fontWeight: "bold",
          }}
        >
          Digital Campaigns
        </Typography>
        <StyledTypography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Drive digital success with our expertise in crafting impactful Digital Campaigns. From strategic planning to execution, we amplify your online presence, ensuring your brand stands out in the digital landscape.
        </StyledTypography>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
        <Typography
          variant="body2"
          sx={{
            fontSize: "22px",
            color: "#1C1F25",
            fontWeight: "bold",
          }}
        >
          Animation Services
        </Typography>
        <StyledTypography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Immerse your audience in captivating narratives with our Animation Services. We specialize in creating dynamic and visually stunning animations that bring your ideas to life, leaving a lasting impression on your viewers.
        </StyledTypography>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
        <Typography
          variant="body2"
          sx={{
            fontSize: "22px",
            color: "#1C1F25",
            fontWeight: "bold",
          }}
        >
          Design Solutions
        </Typography>
        <StyledTypography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Redefine your brand identity with our Design Solutions. From logo design to branding materials, we blend creativity and strategy to deliver visually appealing designs that resonate with your target audience.
        </StyledTypography>
      </Item>
    </Grid>
  </Grid>
</Box>


      </Container>
    </Box>
  );
};

export default Properties;