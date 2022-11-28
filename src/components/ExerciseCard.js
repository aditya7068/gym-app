import React from 'react'
import {Link} from 'react-router-dom'
import {Box,Button,Stack,Typography} from '@mui/material';


const ExerciseCard = ({exercise}) => {

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
     <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
     <Stack direction='row' ml="55px">
      <Button sx={{ml:'21px', color:'#fff',backgroundColor:'#ffa9a9',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}} pt={-200}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ml:'21px', color:'#fff',backgroundColor:'#fcc757',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}} pt={-200}>
        {exercise.target}
      </Button>
     </Stack>
     <Typography  ml="55px" color="#000" fontWeight="bold" textTransform="capitalize" >
        {exercise.name}
     </Typography>
     
    </Link>
  )
}

export default ExerciseCard