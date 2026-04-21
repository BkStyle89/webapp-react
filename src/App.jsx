import MainPage from "./pages/MainPage"
import FilmPage from "./pages/FilmPage"
import {BrowserRouter,Route,Routes} from "react-router"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainPage/>}/>
          <Route path="/film" element={<FilmPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
