
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import ParamsPage from "./components/ParamsPage"


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <div> Routing Practice</div>
        <Routes>
          <Route path="/" element="" ></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<ParamsPage />} />
          <Route path="/:word/:color/:bgCol" element={<ParamsPage />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
