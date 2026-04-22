import { useEffect,useState } from "react";
import axios from 'axios';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useParams } from "react-router-dom";
export default function FilmPage(){

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