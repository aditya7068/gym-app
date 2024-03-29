import React from "react";
import b1 from "../assets/images/home-bg-1.jpg";
import b2 from "../assets/images/home-bg-2.jpg";
import b3 from "../assets/images/home-bg-3.jpg";

const HeroBanner = () => {
  return (
    <div className="banner">
      <div className="carousel-item">
        <div class="content">
          <span>be strong, be fit</span>
          <h3>Make yourself stronger than your excuses.</h3>
          <a href="#" class="btn">
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

// import React from 'react'
// import {Box,Stack,Typography,Button} from '@mui/material';
// import HeroBannerimg from '../assets/images/banner.png'

// const HeroBanner = () => {
//   return (
//     <Box sx={{
//         mt: {lg: '200px',xs:'70px'}, ml: {sm:'50px'}
//     }} position="relative" p="20px">
//         <Typography color="#FF2625" fontWeight="600" fontSize="26px">
//             Fitness Club
//         </Typography>
//         <Typography fontWeight={700}
//         sx={{ fontSize: {lg: '48px',xs:'40px'}}} >
//             Smile,Sweat <br/> Repeat
//         </Typography>
//         <Typography  fontSize="22px" lineHeight="35px" mb={3}>Check out the most effective exercises</Typography>
//         <Button variant="contained" color="error" sx={{backgroundColor:'#FF2625',padding: '10px'}}>Explore Exercises </Button>
//         <Typography fontWeight={600} color="#FF2625" fontSize="200px" mt={10} sx={{opacity: 0.1,display:{lg: 'block',xs:'none'}}}>
//             Exercise
//         </Typography>
//         <img src={HeroBannerimg} alt="banner" className="hero-banner-img"/>
//     </Box>
//   )
// }

// export default HeroBanner
