import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default function MainPage(){

const api_key=import.meta.env.VITE_API_KEY
const[films,setFilms] =useState([]);
  
useEffect(() => {
  axios.get(`${api_key}`)
  .then(response=> {
  setFilms(response.data);
})
  .catch(error => console.error(error));
},[]);

  return (
    <>
    <AppHeader/>
    <main> 
      <h1>FILM</h1>
      <div>
          {films.map( film=> (
            <div key={film.id}></div>
            
          ))}

      </div>
    </main>
    <AppFooter/>
    </>
  )
}
