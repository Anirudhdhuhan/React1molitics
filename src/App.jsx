import './App.css';
import Navigation from './components/Navigation.jsx';
import Profile from './components/profiledetail';
import Toonbook from './components/Toonbook';

function App() {
  return (
    <div className="App">

      <Navigation />   
      <Profile />
      <Toonbook />
         
    </div>
  );
}

export default App;
