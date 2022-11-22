import {React,useState,useEffect} from 'react'
import {Box,Stack,TextField,Typography,Button} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const[search,setSearch]=useState("");
 
  const[bodyParts,setBodyParts]=useState([]);

  useEffect (()=> {
  const fetchExercisesData= async()=> {
    const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
   
    setBodyParts(bodyPartsData);
   
  }
  fetchExercisesData();
  },[])
  const inputevent=(event)=> {
    setSearch(event.target.value.toLowerCase());
   
  };
  const handleSearch=async () => {
  if(search){
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
   console.log(exercisesData);
    const searchedExercises=exercisesData.filter(
      (exercise) => exercise.name.toLowerCase().includes(search)
      ||  exercise.target.toLowerCase().includes(search)
      ||  exercise.equipment.toLowerCase().includes(search)
      ||  exercise.bodyPart.toLowerCase().includes(search)
    )
    // console.log(searchedExercises);
    setSearch('');
    setExercises(searchedExercises);
   
  }
  }

  
  return (
    <Stack   alignItems="center" justifyContent="center" mt="30px" pd="20px" sx={{
     
    }}>
   
     <Typography textAlign="center" fontWeight={700} sx={{ fontSize: {lg:'44px',xs:'40px'}}} mb="40px"> Awesome baby exercises you <br/> should know </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={{
          input:{fontWeight:'700',border:'none',borderRadius:'4px'},
         width:{lg:'1000px',xs:'350px'},
         fontSize:{lg:'',xs:'45px'},
         backgroundColor:'#fff',
         borderRadius: '400px',
         
        }}
        placeholder='search exercises'
        height='74px'
        value={search}
        type='text'
        onChange={inputevent}
        />
        <Button className="search-btn" sx={{
          position:'absolute',
          right:'0',
          height:'55px',
          backgroundColor:'#FF2625',
          color:'#fff',
          width:{lg:'170px',xs:'80px'},
          fontSize:{lg: '20px',xs:'14px'}
        }}
        onClick={handleSearch}
        >Search</Button>
      </Box>
      <Box sx={{position: 'relative',width: '100%',p:'20px'}}>
         <HorizontalScrollbar data={bodyParts}  bodyPart={bodyPart} 
       setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises