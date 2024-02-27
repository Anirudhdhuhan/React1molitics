import './App.css';
import Navigation from './components/Navigation.jsx';
import Profile from './components/profiledetail';
import Toonbook from './components/Toonbook';
import PodRep from './components/Podcasts-Reports';
import Leader from './components/Leader';
import Follow from './components/Followuson';
import Download from './components/Downloadon';
import Leaderdetail from './components/Leaderdetail';

function App() {
  return (
    <div className="App">
       <Navigation /> 
      <div className='flex'>

      <div>
      <Profile />
      <Toonbook />
      <PodRep />
      <Leader />
      <Follow />
      <Download />
     </div>

        <div>
        <Leaderdetail />
        </div>

      </div>
 
    </div>
  );
}

export default App;
