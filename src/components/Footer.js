import React from 'react'
import {Stack,Typography,Box} from '@mui/material'
import Logo from '../assets/images/Logo-1.png';
const Footer = () => {
  return (
   <Box mt="20px" bgcolor= "#fff3f4"  >
      <Stack alignItems="center">
     <img src={Logo} alt="logo image" width="200px" height="40px"/>
      </Stack>
   </Box>
  )
}

export default Footer