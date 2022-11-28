import {React,useState,useEffect} from 'react'
import pagination from '@mui/material/Pagination'
import {Box,Pagination,Stack,Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'



const Exercises = ({exercises,setExercises,bodyPart}) => {
  const[currPage,setCurrPage]=useState(1);
 const exerPerPage=9;
 const indexLastExercise=currPage*exerPerPage;
 const indexFirstExercise=indexLastExercise-exerPerPage;
 const currExercise=exercises.slice(indexFirstExercise,indexLastExercise);
 useEffect(()=>{
let catExercise=[];
const fetchCatExercise=async ()=>{
   catExercise= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
   setExercises(catExercise);
}
fetchCatExercise();
 },[bodyPart])
  const paginate=(e,p)=>{
   setCurrPage(p);
    window.scrollTo({top: 1800 ,behaviour:"smooth"});
     }

  return (
    <Box
    sx={{mt: {lg:'110px'}}}
    mt="50px"
    p="20px"
    >
     <Typography variant="h3" mb="46px">showing result</Typography> 
     <Stack direction="row" sx={{gap: {lg:'110px',xs:'50px'}}}
        flexWrap="wrap"  flexDirection="row">
  
     
     {currExercise.map((exercise,index)=>(
         <ExerciseCard key={index} exercise={exercise}/>
        
     ))}
     </Stack>
     <Stack mt="100px" alignItems="center">
       {exercises.length>9 &&(
        <Pagination
        color="primary"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercises.length/exerPerPage)}
        page={currPage}
        onChange={paginate}
        size="large"
        />
     
       )}
       
     </Stack>
    </Box>
  )
}

export default Exercises

