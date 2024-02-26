import './App.css';
import Navigation from './components/Navigation.jsx';
import Profile from './components/profiledetail';
import Toonbook from './components/Toonbook';
import PodRep from './components/Podcasts-Reports';

function App() {
  return (
    <div className="App">

      <Navigation />   
      <Profile />
      <Toonbook />
      <PodRep />
         
    </div>
  );
}

export default App;
