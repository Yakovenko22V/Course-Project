import './App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import MainPageComponent from './Components/MainPageComponent/MainPageComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent name='MainPage'/>
      <MainPageComponent/>
    </div>
  );
}

export default App;
