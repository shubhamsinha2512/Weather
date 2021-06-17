import './App.css';
import AirPressureIcon from './components/AirPressureIcon/AirPressureIcon';
import Day from './components/Day/Day';
import DayOverviewRow from './components/DayOverviewRow/DayOverviewRow';
import HumidityNowIcon from './components/HumidityNowIcon/HumidityNowIcon';
import HumidityIcon from './components/HumidityRowIcon/HumidityRowIcon';
import TempLocToday from './components/TempLocToday/TempLocToday';
import TempMinMax from './components/TempMinMax/TempMinMax';
import TodayDetails from './components/TodayDetails/TodayDetails';
import TodayWeatherIcon from './components/TodayWeatherIcon/TodayWeatherIcon';
import WeatherStateIcon from './components/WeatherStateIcon/WeatherStateIcon';
import WindSpeedIcon from './components/WindSpeedIcon/WindSpeedIcon';
import Home from './Screens/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />



      {/* <HumidityRowIcon humidity={55} />
      <WeatherStateIcon weather_state_abbr={'sn'} />
      <Day date={"2021-06-18"}/>
      <TempMinMax min={15} max={32} /> */}
      {/* <DayOverviewRow
        date="2021-06-15"
        humidity={82}
        weather_state_abbr='sn'
        min={12}
        max={28}
      />
      <WindSpeedIcon windSpeed={12} />
      <HumidityNowIcon humidity={85} />
      <AirPressureIcon airPressure={1012} />
      <TodayWeatherIcon weather_state_abbr='s' date='2021-08-19' />
      
      <TempLocToday 
        temp={29} 
        city='London' 
        country='United Kingdom' 
        sunrise="2021-06-15T04:42:44.508559+01:00" 
        sunset="2021-06-15T21:19:35.668898+01:00"
        /> */}

        {/* <TodayDetails /> */}
    </div>
  );
}

export default App;
