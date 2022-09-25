import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', xs:'48px'},mt: {sm:'32px',xs: '20px'},justifyContent:'none'}}>
      <Link to="/" style={{width:'48px' ,height: '40px',margin: '0 20px'}}>
      <img src={logo} alt="" />
      </Link>
      <Stack direction="row" gap="40px" fontSize=" 24px" alignItems="flex-end" >
        <Link to="/" style={{color: "#3A1212",borderBottom:'3px solid #FF2625' ,textDecoration:'none'}}>
         Home
        </Link>
        <a href='#exercises' style={{textDecoration: 'none',color: '#3A1212'}}>Exercise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar