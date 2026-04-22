import MainPage from "./pages/MainPage"
import FilmPage from "./pages/FilmPage"
import FilmList from "./pages/FilmList"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainPage/>}/>
          <Route path="/film/:id" element={<FilmPage/>}/>
          <Route path="/filmList" element={<FilmList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
