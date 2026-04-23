import MainPage from "./pages/MainPage"
import ReviewPage from "./pages/ReviewPage"
import FilmList from "./pages/FilmList"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainPage/>}/>
          <Route path="/film/:id" element={<ReviewPage/>}/>
          <Route path="/filmList" element={<FilmList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
