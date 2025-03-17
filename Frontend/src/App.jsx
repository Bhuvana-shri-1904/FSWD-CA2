import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/TaskItem"


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Tasklist />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App