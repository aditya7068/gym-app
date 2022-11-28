import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions,fetchData,youtubeOptions } from '../utils/fetchData'

import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({});
  const [exerciseVideos,setExerciseVideo]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
   const fetchExerciseData=async ()=>{
    const exercisedburl='https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
    const fetchExerciseDetail=await fetchData(`${ exercisedburl}/exercises/exercise/${id}`,exerciseOptions);
    setExerciseDetail(fetchExerciseDetail);

 
    const exerciseVideoData=await fetchData(`${youtubeSearchUrl}/search?query=${fetchExerciseDetail.name}`,youtubeOptions);
    
    setExerciseVideo(exerciseVideoData.contents);
    
   }
fetchExerciseData();
  },[id]);
  return (
   <Box>
    <Details exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises/>
   </Box>
  )
}

export default ExerciseDetail