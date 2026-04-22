import logo from "../images/FakeRewies.png"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export default function AppHeader(){
const api_key=import.meta.env.VITE_API_KEY
const navigate = useNavigate();
const {id} =useParams();
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
    <header>
      <div className="d-flex justify-content-center">
        <img id="logo" src={logo} alt="" />
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " >
        <div className="container-fluid ">
          <a className="navbar-brand " href="/">Recensione film</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li><a className="nav-link active" aria-current="page" href="/filmList">Lista Film</a>
              </li>
              <li>
                <label className="mt-2" htmlFor="Films">Scegli film</label>
                <select  onChange={(e) => navigate(`/film/${e.target.value}`)}>
                  <option value="">Seleziona il titolo</option>
                  {films.map( film=> (
                  <option key={film.id} value={film.id}>{film.title}</option>
                  ))}  
                  
              </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
