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

const [name,setName] = useState("");
const [vote, setVote] = useState("0");
const [review, setReview] = useState("")

const handleSubmit = async(e)=>{
    e.preventDefault();
  
 const data ={
  name,
  vote: Number(vote),
  text: review,
 };
 try{
  await axios.post(`${review_key}/${id}/reviews`,data);
  console.log("recensione creata con successo!");
  
    setName("");
    setVote(0);
    setReview("");

    const res = await axios.get(`${review_key}/${id}/reviews`);
    setReviews(res.data)

 } catch (err){
  console.error(err);
 }
};

/* Stars From Boostrap

FullStar <i className="bi bi-star-fill"></i>
Half star <i className="bi bi-star-half"></i> 
empty Star <i className="bi bi-star"></i>

*/

  return (
    <>
    <AppHeader/>
    <main className="mainDark"> 

      <div className="container ">
        <div id="bannerFilm" className="row row-cols-lg-3 row-cols-sm-1 justify-content-between gx-0">
          <div className="col-auto d-none d-lg-block">
            <img className="bannerIMG " src={banner2} alt="" />
          </div>
          {film && (
            <div className="col-12 col-lg mt-5 d-flex justify-content-center mb-5 px-4">
              <div className="filmCard card p-3 mt-3 h-100 mb-5 border-light">
                  <h3 className="text-light">{film.title}</h3>
                  <img className="cover border-light" src={`http://localhost:3010/movies_cover${film.image}`} alt="" />
                  <p className="fw-bold text-light text-center">{film.genre}</p>
                  <p className="text-light">{film.abstract}</p>
                  <div className="d-flex justify-content-between text-light">
                    <p className="fw-bold text-light">{film.director}</p>
                    <p>{film.release_year}</p>
                  </div>
                  <p className="mt-auto text-light">{film.updated_at}</p>
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
            <div key={review.key} className="col mb-5 d-flex justify-content-center" >
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
      <div>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <form onSubmit={handleSubmit}>
                <div className="form-group w-25">
                  <label htmlFor="N&S">Name & Surname</label>
                  <input  
                    type="text"
                    className="form-control" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name & Surname"/>
                </div>
                <div className="form-group w-25">
                  <label>Vote</label>
                  <select 
                    className="form-control"
                    value={vote}
                    onChange={(e) => setVote(e.target.value)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>  
                <div className="form-group">
                  <label>Recensione</label>
                  <textarea className="form-control" 
                    rows="3" 
                    value={review}
                    onChange={(e)=> setReview(e.target.value)}
                    placeholder="Scrivi la tua recensione"></textarea>
                </div>
                <button type="submit" className="ButtoneReview btn btn-primary mt-3">invia</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <a className="callBack" href="../">Torna Indietro</a>
      </div>
    </main>
    <AppFooter/>
    </>
  )
}



