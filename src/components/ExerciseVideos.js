import React from 'react'
import {Box,Typography,Stack} from '@mui/material'


const ExerciseVideos = ({exerciseVideos,name}) => {
  if(!exerciseVideos.length) return 'Loding...'
  return (
    <Box sx={{marginTop:{lg:'200px',xs:'10px'},p:'26px'}}>
    <Typography variant='h4' >
      watch <span style={{color:'#ff2625',textTransform:'capitalize'}}> {name}</span> exercise detail
    </Typography>
    <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
    sx={{
      flexDirection:{lg:'row'},gap:{lg:'10px' ,xs:'0px'}
    }}
    >
     {exerciseVideos?.slice(0,6).map((item,index)=>(
      <a
       key={index}
        className="exercise-video"
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target="_blank"
        rel="noreferrer">
       
         <img src={item.video.thumbnails[0].url} alt="item.video.title"/>
         <Box>
          <Typography variant="h7" color="#000">
            {item.video.title}
          </Typography>
        <br/>
        <Typography variant="h9" color="#000">
            {item.video.channelName}
          </Typography>
         </Box>
      </a> 
      ))}
    </Stack>
    </Box>
  )
}

export default ExerciseVideos