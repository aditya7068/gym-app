import React from 'react'
import {Stack,Typography,Button} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImg from '../assets/icons/target.png'
import EquipmentImg from '../assets/icons/equipment.png'
const Details = ({exerciseDetail}) => {
const{bodyPart,gifUrl,name,target,equipment}=exerciseDetail;
const extraDetail=[
  {
    icon: BodyPartImage,
    name: bodyPart,
  },
  {
    icon: TargetImg,
    name: target,
  },
  {
    icon: EquipmentImg,
    name: equipment,
  },


]
  return (
    <Stack gap="60px"  sx={{flexDirection:{lg:'row'},p:'20px' ,alignItems:'center'}}>
      <Stack sx={{pl:{lg:'150px'}}}><img src={gifUrl} alt="image" loading='lazy' className="detail-image"/></Stack>
     <Stack sx={{ gap: {lg:'35px',xs:'20px'},pl:'100px'}} >
      <Typography variant='h4' textTransform="capitalize">
        {name}
      </Typography>
      <Typography variant='h6' >
        Exercise keep you strong.  {name} {' '}
        is one of the best 
        exercise to target your {target}.It will help your 
        mood and gain energy.
      </Typography>
      {extraDetail.map((item)=>(
        <Stack  key={item.name} direction="row" gap="24px" alignItems="center">
        <Button sx={{backgroundColor:'#fff2db',borderRadius:'50%'}}>
        <img src={item.icon} alt="icon" />
        </Button>
        <Typography textTransform="capitalize" variant="h5">
          {item.name}
        </Typography>
        </Stack>
      ))}
     </Stack>
    </Stack>
  )
}

export default Details