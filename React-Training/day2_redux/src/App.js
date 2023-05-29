import logo from './logo.svg';
import './App.css';
import UserRegistration from './Components/USerRegistartion';
import FetchandDisplayData from './Components/FetchandDisplayData';
import TodofetchButton from './Components/TodofetchButton';

function App() {
  return (
    <div className="App">
      {/* <UserRegistration/> */}
      <FetchandDisplayData/>
      <TodofetchButton/>
    </div>
  );
}

export default App;
