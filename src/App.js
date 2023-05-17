import './App.css';
import { useNavigate,Link } from 'react-router-dom'
import Header from './components/molecules/header'
import Option from './components/section/option'


function App() {
  const navigate = useNavigate()
  const pathByKey = {
    'about' : './about',
    'contact' : './contact',
    'home' : './home',
    'login' : './login',
    'projects' : './projects',
    'register' : './register'
  }
   const handleRedirect = function (key){
    const pathRedirect = pathByKey[key]
    navigate(pathRedirect)
   }

  return (
    <div className="App">
      
        <Header/>
        
        <div className="list">
          <ul>
        <p onClick={handleRedirect}><Link to={'./about'}>About</Link></p>
        <p onClick={handleRedirect}><Link to={'./contact'}>Contact</Link></p>
        <p onClick={handleRedirect}><Link to={'./home'}>Home</Link></p>
        <p onClick={handleRedirect}><Link to={'./login'}>Login</Link></p>
        <p onClick={handleRedirect}><Link to={'./projects'}>Projects</Link></p>
        <p onClick={handleRedirect}><Link to={'./register'}>Register</Link></p>
        </ul>
        </div>
        <Option/>
    </div>
  );
}

export default App;
