import MainPage from "./pages/MainPage"
import FilmPage from "./pages/FilmPage"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainPage/>}/>
          <Route path="/film/:id" element={<FilmPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
