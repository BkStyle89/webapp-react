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
      <h1 className="text-center">LISTA FILM</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {films.map( film=> (
            <div className="col">
              <div className="card">
                <div key={film.id}></div>
                  <h3>{film.title}</h3>
                  <img src={film.image} alt="" />
                  <p>{film.genre}</p>
                  <p>{film.abstract}</p>
                  <div>
                    <p>{film.director}</p>
                    <p>{film.release_year}</p>
                  </div>
                  <p>{film.updated_at}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <AppFooter/>
    </>
  )
}
