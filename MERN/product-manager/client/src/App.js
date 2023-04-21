import './App.css';
import One from './components/One';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './views/Main';
import Update from './components/Update';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/product/:_id" element={<One />}/>
          <Route path="/product/edit/:_id" element={<Update />}/>

        </Routes>
      </BrowserRouter>
      
    </div>

    
  );
}

export default App;
