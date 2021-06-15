import './App.css';
import Day from './components/Day/Day';
import DayOverviewRow from './components/DayOverviewRow/DayOverviewRow';
import HumidityIcon from './components/HumidityIcon/HumidityIcon';
import TempMinMax from './components/TempMinMax/TempMinMax';
import WeatherStateIcon from './components/WeatherStateIcon/WeatherStateIcon';

function App() {
  return (
    <div className="App">
      {/* <HumidityIcon humidity={55} />
      <WeatherStateIcon weather_state_abbr={'sn'} />
      <Day date={"2021-06-18"}/>
      <TempMinMax min={15} max={32} /> */}
      <DayOverviewRow
        date="2021-06-15"
        humidity={82}
        weather_state_abbr='sn'
        min={12}
        max={28}
      />
    </div>
  );
}

export default App;
