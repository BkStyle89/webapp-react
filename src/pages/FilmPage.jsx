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
    <main> 
      <div className="container">
        <div className="row">
          {reviews.map(review => (
            <div className="col" key={review.id}>
              <div className="card">
                  <h3>{review.title}</h3>
                  <img src={review.image} alt="" />
                  <p>{review.genre}</p>
                  <div>
                    <p>{review.director}</p>
                    <p>{review.release_year}</p>
                    <p>{review.name}</p>
                    <p>voto ${4}</p>
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