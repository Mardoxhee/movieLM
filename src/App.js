
import './App.css';
import NavBar from './components/Header/Header';
import PopularSeries from './components/main/PopularSeries';
import SectionAccueil from './components/main/SectionAccueil'
import SectionLatest from './components/main/SectionLatest';
import SectionUpcomming from './components/main/SectionUpcomming';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <SectionAccueil/>
      <SectionLatest/>
      <SectionUpcomming/>
      <PopularSeries/>
    </div>
  );
}

export default App;
