import logo from "./logo.svg";
import "./App.css";
import Task from "./components/AddTask";
import TaskList from "./components/TaskList";
import {Container} from '@mui/material'

function App() {
  
  return (
    <div className="App">
      <Container maxWidth="lg" centered className="mainbody">
        <Task />
      
      </Container>
    </div>
  );
}

export default App;
