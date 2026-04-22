import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useNavigate } from "react-router-dom";

export default function MainPage(){
const api_key=import.meta.env.VITE_API_KEY
const navigate = useNavigate();
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
    <main className="bg-secondary "> 
      <h1 className="text-center">FAKE REVIEWS</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {films.map( film=> (
            <div className="col mt-5 d-flex justify-content-center" key={film.id}>
              <div className="card p-3 mt-3 h-75 mb-5"
              onClick={() => navigate(`/film/${film.id}`)}
              style={{ cursor: "pointer" }}>
                  <h3>{film.title}</h3>
                  <img src={`http://localhost:3010/post/movies_cover${film.image}`} alt="" />
                  <p>{film.genre}</p>
                  <p>{film.abstract}</p>
                  <div className="d-flex justify-content-between ">
                    <p>{film.director}</p>
                    <p>{film.release_year}</p>
                  </div>
                  <p className="mt-auto">{film.updated_at}</p>
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
