import Hero from "./pages/Hero/Hero";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Components/layout";
import SignIn from "./pages/Sign_in";

import Profile from "./pages/Profile"
import {useState} from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Hero />   */}
      {/* <SignIn /> */}
      <Routes>
        <Route path="/signin" element={<><SignIn /></>} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} /> 
        {/* <Route path="/education" element={<Layout><Education /></Layout>} />
        <Route path="/bookings" element={<Layout><Booking /></Layout>} />
        <Route path="/donation" element={<Layout><Donation /></Layout>} /> */}
        <Route path="/profile" element={<Layout><Profile/></Layout>} />
        {/* <Route path="/finance" element={<><Finance /></>} /> */}
        {/* <Route path="/questions" element={<Layout><Questions /></Layout>} /> */}
        {/* <Route path="/retireaibot" element={<><Bot /></>} /> */}
        {/* <Route path="/" element={<><Hero /></>} /> */} 
      </Routes>  
         </>
  );
}

export default App;
