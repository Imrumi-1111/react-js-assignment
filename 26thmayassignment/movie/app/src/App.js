import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/atoms/navbar/navbar';
import HomePage from './components/atoms/home/home';
import { Provider } from 'react-redux';
import store from './components/redux/store'
import Favourites from './components/molecule/favourites/favourites';


function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
         
          <div>
          <Navbar />

            <Routes>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/favourites" element={<Favourites/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
