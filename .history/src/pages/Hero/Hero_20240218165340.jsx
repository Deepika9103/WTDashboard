import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import useMediaQuery from '@mui/material/useMediaQuery';
import heroImg from "../../media/main_page.jpeg";
import heroImg_2 from "../../media/education.png";
import heroImg_3 from "../../media/people.png";
import heroImg_4 from "../../media/donation (3).png";
import heroImg_5 from "../../media/About_Us.png";
import heroImg_6 from "../../media/Educate_A_Child.png";
import CustomButton from "../../Components/CustomButton";
import CongratCard from "../../Components/CongratsCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Slide } from "@mui/material";
const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  
  const TypingText = () => {
    const initialText = "Visualize, Enlighten and Transform";
    const finalText = "your beautiful ";
    const journeyText = "Journey";
    const additionalText = "We are your creative partners who are fueled by an idea. We thrive on it, relentlessly pursue it and go beyond our limits to execute it. Our founders, backed by an unparalleled team, believe that talent and passion have no limits.";
    const [typedText, setTypedText] = useState("");
  
    useEffect(() => {
      const typeText = async () => {
        for (let i = 0; i < initialText.length; i++) {
          setTypedText((prevText) => prevText + initialText[i]);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
  
        setTypedText((prevText) => prevText + " "); // Add a space before the next part
  
        await new Promise((resolve) => setTimeout(resolve, 500));
  
        for (let i = 0; i < finalText.length; i++) {
          setTypedText((prevText) => prevText + finalText[i]);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        setTypedText((prevText) => prevText + journeyText); 
  
      };
  
      typeText();
    }, []);
  
    return (
      <>
      <div>
        <Typography variant="body2" sx={{ fontSize: "34px", fontWeight: "bold", mt: 3, mb: 3 }}>
          {typedText}
        </Typography>
        <Slide in={typedText.includes(journeyText)} direction="right" timeout={1000}>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "#1C1F25", my: 4 }}>
            {additionalText}
          </Typography>
        </Slide>
      </div>
        <div style={containerStyle}>
        <Slide in={typedText.includes(journeyText)} direction="right" timeout={1000}>
          <Button 
            sx={{
              textDecoration: "none",
              padding: "10px 20px",
              backgroundColor: "#387FF5",
              color: "#fff",
              textTransform: 'none',
              '&:hover': {
                backgroundColor: "#fff",
                color: "#387FF5",
                borderColor: "#387FF5",
              },
            }}
          >
            <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>Sign In</Link>
          </Button>
        </Slide>
  
        {isLargeScreen && (
          <Slide in={typedText.includes(journeyText)} direction="right" timeout={1050}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#fff',
                color: '#000',
                ...secondButtonStyle,
              }}
            >
              Watch Video
            </Button>
          </Slide>
        )}
        
      </div>
      </>
    );
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
  const isLargeScreen = useMediaQuery('(min-width:960px)');
  const containerStyle = {
    display: 'flex',
    gap: '10px', // Adjust the gap between buttons as needed
  };
  const secondButtonStyle = {
    border: '1px solid #000', // Black border for the second button
    textTransform: 'none', // Disable the uppercase text transform
  };

  return (
    <>
    <Box sx={{ 
      // background: `linear-gradient(to bottom, #FFFFFF 50%, #387FF5 200%)`,
     marginBottom: "1rem"}}>
        <Navbar />
      <Container >
        <CustomBox >
          <Box sx={{ flex: "1"}}>
            
<TypingText />
          </Box>

          <Slide in={true} direction="left" timeout={1000}>
          <Box sx={{ flex: "0.5" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", maxHeight: "100%" , borderRadius: "10%"}}
            />
          </Box>
        </Slide>
        </CustomBox>
    </Container>
    </Box>
    {/* <Box sx= {{backgroundColor: "rgba(244, 127, 42, 0.04)"}}> */}
    <Box  >
    <Container sx={{marginTop:"1rem"}}>
        <CustomBox>
          <CongratCard imageUrl={heroImg_4} title="Make a Donation"
          content="Enable positive changes by donating and helping those in need "
          buttonText="Go to Donation"/>
          <CongratCard  title="Become a Volunteer" imageUrl={heroImg_3} content="Support education, offer your time and become impactful K12 educators" 
          buttonText="Register as volunteer"/>
          <CongratCard title="Child Education " imageUrl={heroImg_2} content="Invest in children potential, providing  quality education for a brighter future " 
          buttonText="Know More"/>
    
          </CustomBox>
    </Container>
      </Box>
    <Container>
        <CustomBox>
        <Box sx={{ flex: "0.75" }}>
            <img
              src={heroImg_5}
              alt="heroImg_2"
              style={{ maxWidth: "100%", maxHeight: "90%", marginTop:"3rem",marginRight: "4rem", borderRadius: "5%"}}
            />
          </Box>
          <Box sx={{ flex: "1.25"}}>
          <Title variant="h1" sx={{color: "#F47F2A"}}>
              About Us
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#1C1F25", my: 4 }}
            >
    At ......., We are dedicated to make a positive impact. Building a better world through compassion and action. Join us in our mission to bring hope, create change and empower lives.          </Typography>
            <List>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Making Education Accesible</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Founded for Change</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Passionate Upbringings</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Transforming Communities</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
</List>
        
          </Box>
        </CustomBox>
</Container>
<Box sx={{ background: `linear-gradient(to top, #FFFFFF 2%, #F47F2A 40%)`, marginBottom: "2rem"}}>
      
      <Container >
        <CustomBox >
          <Box sx={{ flex: "1"}}>
            
       
<Typography
  variant="body2"
  sx={{
    fontSize: "40px",
    fontWeight: "bold",
    mt: 10,
    mb: 4,
  }}
>
  {/* <span sx={{ color: "#ffffff", backgroundColor: "#F47F2A" }}>Educate a Child  </span>{" "} */}
  <span style={{ color: "white", fontWeight: "bold", borderBottom: "4px solid transparent", paddingBottom: "8px", borderBottomColor: "white" }}>
    Educate A Child
  </span>
</Typography>


            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#fffff", my: 2 }}
            >
              <span style={{ color: "white" }}>
Embark on a meaningful journey with us as a volunteer, where your dedication can help bridge the educational gap in rural villages. Together, we strive to create a ripple effect of positive change, empowering communities through educationJoin us in this collective endeavor to uplift and educate, making a real difference in the heart of rural areas.     
</span>     </Typography>
            <div style={containerStyle}>
            <CustomButton
              backgroundColor="#fff"
              color="#F47F2A"
              buttonText="Register"
              heroBtn={true}
            />
       </div>
          </Box>

          <Box sx={{ flex: "0.75", position: "relative", overflow: "hidden" }}>
  <img
    src={heroImg_6}
    alt="heroImg"
    style={{
      width: "100%",
      height: "100%",
      marginTop:"4rem",
      borderRadius: "50% 50% 47% 47%"
    }}
  />
</Box>

        </CustomBox>
    </Container>
    </Box>
   
      <Footer />

    </>
  );
};

export default Hero;
