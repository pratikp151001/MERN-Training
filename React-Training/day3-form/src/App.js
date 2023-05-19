import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

function App() {
 const fields={
    firstname:"Firstname",
    lastname:"Lastname",
    address:"Address",
    email:"Email",
    city:"City",
    state:"State",
    country:"Country",
    birthday:"Birthday",
    zipcode:"Zipcode"

  }
  return (
    <div className="App">
     <Form info={fields}/>
    </div>
  );
}

export default App;
