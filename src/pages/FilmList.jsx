import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useNavigate } from "react-router-dom";
export default function FilmList(){


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
    <main>
        <div className="container-fluid bg-secondary">
            <div className="row row-cols-1">
                {films.map( film=> (
                <div className="col d-flex justify-content-center no-wrap" key={film.id}>
                    <ul className="list-group w-25 mt-2 mb-3 ">
                        <li className="list-group-item text-center fw-bold mt-2 bg-primary text-light border-dark" onClick={() => navigate(`/film/${film.id}`)}
              style={{ cursor: "pointer" }}>{film.title}</li>
                    </ul>
                </div>
                ))}
            </div>
        </div>
    </main>
    <AppFooter/>
    </>
       
  )
}
