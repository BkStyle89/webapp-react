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
    <main className="mainDark"> 
      <h1  className="redText text-center ">Welcome To The FakeReviews Site</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
          {films.map( film=> (
            <div className="col mt-5 d-flex justify-content-center mb-5" key={film.id}>
              <div className="filmCard card p-3 mt-3 h-100 mb-5 border-light"
              onClick={() => navigate(`/film/${film.id}`)}
              style={{ cursor: "pointer" }} >
                  <h3 className="text-center text-light">{film.title}</h3>
                  <img className="cover border-light" src={`http://localhost:3010/movies_cover${film.image}`} alt="" />
                  <p className="fw-bold text-light text-center">{film.genre}</p>
                  <div className="d-flex justify-content-between mt-auto text-light">
                    <p className="fw-bold text-light">{film.director}</p>
                    <p className="text-light">{film.release_year}</p>
                  </div>
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

