import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useParams } from "react-router-dom";
import banner from "../images/banner.png"
import banner2 from "../images/banner2.png"
export default function ReviewPage(){

const review_key=import.meta.env.VITE_REVIEW_KEY
const { id } = useParams();
const[reviews,setReviews] =useState([]);
  
useEffect(() => {
  axios.get(`${review_key}/${id}/reviews`)
  .then(response=> {
  setReviews(response.data);
  console.log(response.data);
  
})
  .catch(error => console.error(error));
},[id]);

const api_key=import.meta.env.VITE_API_KEY
const[film,setFilm] =useState(null);
  
useEffect(() => {
  axios.get(`${api_key}/${id}`)
  .then(response=> {
  setFilm(response.data);
})
  .catch(error => console.error(error));
},[id]);

function ratingStars(vote){
  const stars=[]
  const rating = (vote)

  for(let i=0; i<5;i++){
    if(i<rating){
      stars.push(<i className="bi bi-star-fill"></i>)
    }else{
      stars.push(<i className="bi bi-star"></i>)
    }
  }
  return stars
}



/* Stars From Boostrap

FullStar <i class="bi bi-star-fill"></i>
Half star <i class="bi bi-star-half"></i> 
empty Star <i class="bi bi-star"></i>

*/

  return (
    <>
    <AppHeader/>
    <main className="bg-secondary"> 

      <div className="container ">
        <div id="bannerFilm" className="row row-cols-lg-3 row-cols-sm-1 justify-content-between gx-0">
          <div className="col-auto d-none d-lg-block">
            <img className="bannerIMG " src={banner2} alt="" />
          </div>
          {film && (
            <div className="col-12 col-lg mt-5 d-flex justify-content-center mb-5 px-4">
              <div className="card p-3 mt-3 h-100 mb-5">
                  <h3>{film.title}</h3>
                  <img className="cover" src={`http://localhost:3010/movies_cover${film.image}`} alt="" />
                  <p className="fw-bold">{film.genre}</p>
                  <p>{film.abstract}</p>
                  <div className="d-flex justify-content-between ">
                    <p className="fw-bold">{film.director}</p>
                    <p>{film.release_year}</p>
                  </div>
                  <p className="mt-auto">{film.updated_at}</p>
              </div>
            </div>
          )}
          <div className="col-auto d-none d-lg-block ms-auto">
            <img className="bannerIMG" src={banner2} alt="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h2 id="reviewFilm" className="text-center">RECENSIONI FILM</h2>
      </div>
      <div className="container">
        <div className="row">
          {reviews.map(review => (
            <div className="col mb-5 d-flex justify-content-center" >
              <div className="card mt-3 p-3 h-100">
                  <h3>{review.title}</h3>
                  
                  <p className="fw-bold">{review.genre}</p>
                  <div>
                    <p className="fw-bold">{review.director}</p>
                    <p>{review.release_year}</p>
                    <p>{review.name}</p>
                    <p>{ratingStars(review.vote)}</p>
                    <p>recensione {review.text}</p>
                  </div>
                  <p>{review.updated_created_at} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a className="callBack" href="../">Torna Indietro</a>
      </div>
    </main>
    <AppFooter/>
    </>
  )
}