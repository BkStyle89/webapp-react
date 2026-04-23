import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useNavigate } from "react-router-dom";
import banner2 from "../images/banner2.png"
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
            <div className="row row-cols-lg-3 row-cols-sm-1 justify-content-between gx-0" id="bannerFilm">
                <div className="col-auto d-none d-lg-block">
                    <img className="bannerIMG " src={banner2} alt="" />
                </div>
                <div className="col d-flex justify-content-center flex-wrap">
                    {films.map( film=> (
                    <div className="w-100" key={film.id}>
                        <ul className="list-group w-50 mt-2 mb-3 mx-auto">
                            <li className="redText list-group-item text-center fw-bold mt-2 bg-dark  border-light" onClick={() => navigate(`/film/${film.id}`)}
                  style={{ cursor: "pointer" }}>{film.title}</li>
                        </ul>
                    </div>
                    ))}
                </div>
                <div className="col-auto d-none d-lg-block ms-auto">
                    <img className="bannerIMG " src={banner2} alt="" />
                </div>
            </div>
        </div>
    </main>
    <AppFooter/>
    </>
       
  )
}
