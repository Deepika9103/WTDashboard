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
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { useMediaQuery } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


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
  const Service = ({ imageSrc, title, brief }) => (
    <Grid item xs={12} md={4}>
      <Slide in={true} direction="up" timeout={{ enter: 1000 }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src={imageSrc}
            alt={title}
            style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey' }}>
            {brief}
          </Typography>
        </div>
      </Slide>
    </Grid>
  );
  
  const Services = () => {
    const servicesData = [
      {
        title: 'VFX and 3D Animations',
        imageSrc:heroImg,
        brief: 'Brief about VFX and 3D Animations',
      },
      {
        title: 'Trailer and Digital Campaigns',
        imageSrc: heroImg,
        brief: 'Brief about Trailer and Digital Campaigns',
      },
      {
        title: 'Production and Design',
        imageSrc: heroImg,
        brief: 'Brief about Production and Design',
      },
    ];
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const servicesSection = document.getElementById('services-section');
  
        if (servicesSection) {
          const rect = servicesSection.getBoundingClientRect();
          const isInViewNow = rect.top <= window.innerHeight && rect.bottom >= 0;
  
          if (isInViewNow && !isInView) {
            setIsInView(true);
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isInView]);
  
  
    return (
      <Container id="services-section" sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {isInView &&
            servicesData.map((service, index) => (
              <Service key={index} {...service} />
            ))}
        </Grid>
      </Container>
    );
  };
  const ExperienceGridItem = ({ title, number }) => (
    <Grid item xs={12} md={4}>
      <Slide in={true} direction="right" timeout={{ enter: 2000 }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h4">{number}</Typography>
        </div>
      </Slide>
    </Grid>
  );
  
  const ExperienceGrid = () => {
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const experienceSection = document.getElementById('experience-section');
  
        if (experienceSection) {
          const rect = experienceSection.getBoundingClientRect();
          const isInViewNow = rect.top <= window.innerHeight && rect.bottom >= 0;
  
          if (isInViewNow && !isInView) {
            setIsInView(true);
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isInView]);
  
    const experienceData = [
      { title: 'Experience', number: '10 years' },
      { title: 'Creative Team', number: '80+' },
      { title: 'AVs', number: '500+' },
      { title: 'Promos', number: '287+' },
      { title: 'Shoots', number: '129+' },
      { title: 'VFX', number: '35+' },
    ];
  
    return (
      <Container id="experience-section" sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4,fontSize: "34px", fontWeight: "bold"}}>
          About Us
        </Typography>
        <Grid container spacing={4}>
          {isInView &&
            experienceData.map((item, index) => (
              <ExperienceGridItem key={index} {...item} />
            ))}
        </Grid>
      </Container>
    );
  };
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
        <Typography variant="body2" sx={{ fontSize: "34px", fontWeight: "bold", mt: 8, mb: 3 }}>
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
          <Box sx={{ flex: "0.75" }}>
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
    <Container>
        <CustomBox>
<        ExperienceGrid/>
        </CustomBox>
</Container>
<Box  >
    <Container sx={{marginTop:"1rem"}}>
        <CustomBox>
        <Services />
          {/* <CongratCard imageUrl={heroImg_4} title="Make a Donation"
          content="Enable positive changes by donating and helping those in need "
          buttonText="Go to Donation"/>
          <CongratCard  title="Become a Volunteer" imageUrl={heroImg_3} content="Support education, offer your time and become impactful K12 educators" 
          buttonText="Register as volunteer"/>
          <CongratCard title="Child Education " imageUrl={heroImg_2} content="Invest in children potential, providing  quality education for a brighter future " 
          buttonText="Know More"/> */}
    
          </CustomBox>
    </Container>
      </Box>
<Box sx={{  marginBottom: "2rem"}}>
      
      <Container >
      <Title variant="h1" sx={{ color: "#1C1F25", marginLeft: "7rem", marginRight: "7rem" , marginTop: "5rem"}}>
              Ask Us Your Questions and Join Us on Your Future Journey
            </Title>
      <CustomBox>
            <Box sx={{ flex: "0.75" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "40px",
                  // color: "#1C1F25",
                  fontWeight: "bold",

                  mb: 4,
                }}
              >
                <span >Have Questions ?</span> <span sx={{ color: "#387FF5 !important" }}>   Get In Touch</span>
              </Typography>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator><Home /></ListItemDecorator>
                    <ListItemContent>India — 723 17th Street, Office 478 Mumbai, IM 81566 (address dekh lena net)</ListItemContent>
                    {/* <KeyboardArrowRight /> */}
                  </ListItemButton>
                </ListItem>
                <br />
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator><EmailIcon /></ListItemDecorator>
                    <ListItemContent>tiaa@gmail.com</ListItemContent>
                    {/* <KeyboardArrowRight /> */}
                  </ListItemButton>
                </ListItem>
                <br />
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator><LocalPhoneIcon /></ListItemDecorator>
                    <ListItemContent>+91 123456789</ListItemContent>
                    {/* <KeyboardArrowRight /> */}
                  </ListItemButton>
                </ListItem>


              </List>
            </Box>
            <Box sx={{ flex: "1.25" }}>



              <form style={{ padding: '30px 0 0 0' }}>
                <div style={{ display: 'flex', margin: '32px 0' }}>
                  <div style={{ width: '48%', marginRight: '4%' }}>
                    <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                      <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="First Name" />
                      <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                        <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '48%' }}>
                    <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                      <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="Last Name" />
                      <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                        <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', margin: '32px 0' }}>
                  <div style={{ width: '48%', marginRight: '4%' }}>
                    <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                      <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="Email Address" />
                      <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                        <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '48%' }}>
                    <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                      <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="subject" />
                      <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                        <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                    <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="How can we help you ? Feel free to get in touch!" />
                    <br />
                    <br />
                    <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                      <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <CustomButton
                  backgroundColor="#387FF5"
                  color="#fff"
                  buttonText="Get In Touch !"
                  heroBtn={true}
                />

                {/* <div style={{ overflow: 'hidden', height: '45px!important', width: '25%!important' }} className="submit-btn"> */}
                {/* <div style={{ height: '100%', width: '300%', position: 'absolute', left: '-100%', background: '-webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea)', transition: 'all 0.4s' }} className="inner"></div> */}
                {/* <input type="submit" value="submit" style={{ background: 'none', border: 'none', color: '#fff', fontSize: '17px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', position: 'relative', zIndex: '2' }} /> */}
                {/* </div> */}
              </form>





            </Box>

          </CustomBox>  
    </Container>
    </Box>
   
      <Footer />

    </>
  );
};

export default Hero;
