import MainPage from "./pages/MainPage"
import ReviewPage from "./pages/ReviewPage"
import FilmList from "./pages/FilmList"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Loading} from "./context/context"
function App() {


  return (
    <>
    <Loading>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainPage/>}/>
          <Route path="/film/:id" element={<ReviewPage/>}/>
          <Route path="/filmList" element={<FilmList/>}/>
        </Routes>
      </BrowserRouter>
    </Loading>
    </>
  )
}

export default App
