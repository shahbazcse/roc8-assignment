import './App.css';
import { Booking } from './components/Booking';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='pb-[4vh] md:pb-0'>
        <Booking />
      </div>
    </div>
  );
}

export default App;
