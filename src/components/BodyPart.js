import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
   <Stack
   type="button"
   alignItems="center"
   justifyContent="center"
   className='bodyPart-card'
   
   sx={{
    borderTop: bodyPart=== item? '4px solid #ff2526':'',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '20px',
    width:'270px',
    height: '270px',
    cursor:'pointer',
    gap:'40px'
   }}
  //  onClick={()=>{
  //   console.log(item);
  //  }}
   onClick={()=> {
    setBodyPart(item);
    window.scrollTo({top: 1800,left: 100,behaviour:'smooth'})
   }}

   >
    <img src={Icon} style={{width: '40px',height:'40px'}}/>
    <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize' cplor="3A1212">{item}</Typography>
   </Stack>
  )
}

export default BodyPart