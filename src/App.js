import './App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import MainPageComponent from './Components/MainPageComponent/MainPageComponent';

function App() {
  document.title = "Popular Movies"
  return (
    <div className="App">
      <HeaderComponent title = "TMBD's API" name='MainPage'/>
      <MainPageComponent/>
    </div>
  );
}

export default App;
