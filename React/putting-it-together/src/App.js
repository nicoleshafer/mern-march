
import './App.css';
import PersonCard from './components/PersonCard';



function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName={"Taylor"}
      firstName={"Nicole"}
      age={29}
      hairColor={"Brown"}
      />
      <PersonCard 
      lastName={"Taylor"}
      firstName={"Potter"}
      age={7}
      hairColor={"Brown"}/>
      <PersonCard 
      lastName={"Kuszaj"}
      firstName={"Alexis"}
      age={26}
      hairColor={"Brown"}/>
      <PersonCard 
      lastName={"Taylor"}
      firstName={"Kennedy"}
      age={1}
      hairColor={"Blonde"}/>
    </div>
  );
}

export default App;
