import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default function FilmPage(){

const review_key=import.meta.env.VITE_REVIEW_KEY
const[reviews,setreviews] =useState([]);
  
useEffect(() => {
  axios.get(`${review_key}`)
  .then(response=> {
  setFilms(response.data);
})
  .catch(error => console.error(error));
},[]);

  return (
    <>
    <AppHeader/>
    <main> 
      main
    </main>
    <AppFooter/>
    </>
  )
}