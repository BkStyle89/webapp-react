import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useNavigate } from "react-router-dom";
import banner2 from "../images/banner2.png"
import { useContext } from "react";
import {context} from "../context/context"
export default function FilmList(){


const api_key=import.meta.env.VITE_API_KEY
const navigate = useNavigate();
const[films,setFilms] =useState([]);
const { load, setLoad } = useContext(context);
  
useEffect(() => {
    setLoad(true)
    setTimeout(() =>{
  axios.get(`${api_key}`)
  .then(response=> {
  setFilms(response.data);
  setLoad(false)
})
  .catch(error => console.error(error));
  setLoad(false);
},2000)
},[]);



return (
    <>
    <AppHeader/>
    <main>
        
        <div className="container-fluid bg-secondary">
            {load && (
              <div className="loaderPage text-center text-light mt-3 py-5">
                <i className="bi bi-arrow-clockwise"></i> Caricamento della FakeReviews in corso, attendere...
              </div>
            )}
            <div className="row row-cols-lg-3 row-cols-sm-1 justify-content-between gx-0" id="bannerFilm">
                {!load && (
                  <div className="col-auto d-none d-lg-block">
                      <img className="bannerIMG " src={banner2} alt="" />
                  </div>
                )}
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
                {!load && (
                  <div className="col-auto d-none d-lg-block ms-auto">
                      <img className="bannerIMG " src={banner2} alt="" />
                  </div>
                )}
            </div>
        </div>
    </main>
    <AppFooter/>
    </>
       
  )
}
