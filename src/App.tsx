import { HashRouter, Route, Routes } from "react-router-dom"
import Inicio from "./componentes/Inicio"
import Login from "./componentes/Login"
import CreateAcount from "./componentes/CreateAcount"
import Films from "./componentes/Films"
import Series from "./componentes/Series"
import FilmDetail from "./componentes/FilmDetail"
import SeriesDetail from "./componentes/SeriesDetail"
import Navbar from "./componentes/Navbar"

function App() {

  return (
    <>
    <HashRouter>

      <Navbar/>






      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-account" element={<CreateAcount/>}/>
        <Route path="/films" element={<Films/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/films/:id" element={<FilmDetail/>}/>
        <Route path="/series/:id" element={<SeriesDetail/>}/>

      </Routes>
    </HashRouter>

    </>
  )
}

export default App
