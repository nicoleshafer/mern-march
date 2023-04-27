import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddAuthor from './componets/AddAuthor';
import ViewAll from './componets/ViewAll';
import EditOne from './componets/EditOne';
import Details from './componets/Details';


function App() {
  return (
    <div className="App">
      <div className='nav'>
        <div className='container '>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <div className="navbar-brand" href="#">
                <img src="http://ndl.northwestern.edu/wp-content/uploads/2017/01/AdobeStock_59633034.Book_.jpeg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                Favorite Authors
              </div>
            </div>
          </nav>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ViewAll />} />
            <Route path="/authors" element={<AddAuthor />} />
            <Route path="/authors/edit/:_id" element={<EditOne />} />
            <Route path="/authors/:_id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
