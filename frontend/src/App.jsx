import Headers from "./components/headers.components"
import NotesPage from "./pages/notespage"
import NotePage from "./pages/notepage";
import './App.css'
import {
  BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App=()=>{
  return (
    <div className='app'>
      <Router>
        <Headers />
        <Routes>
          <Route path="/"  element={<NotesPage />} exact/>
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
