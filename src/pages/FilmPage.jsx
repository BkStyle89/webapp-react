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
},[]);

  return (
    <>
    <AppHeader/>
    <main className="bg-secondary"> 
      <div className="container">
        <div className="row">
          {reviews.map(review => (
            <div className="col mb-5" >
              <div className="card mt-3 p-3 h-100">
                  <h3>{review.title}</h3>
                  <img className="cover" src={`http://localhost:3010/movies_cover${review.image}`} alt="" />
                  <p className="fw-bold">{review.genre}</p>
                  <div>
                    <p className="fw-bold">{review.director}</p>
                    <p>{review.release_year}</p>
                    <p>{review.name}</p>
                    <p>voto {review.vote}</p>
                    <p>recensione ${review.text}</p>
                  </div>
                  <p>{review.updated_created_at}</p>
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