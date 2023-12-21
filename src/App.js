import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animation/animation.css';
import './css/Style.css';
import './App.css';
import 'aos/dist/aos.css'
import Main from './screen/main/Main';



import Imgcontainer from './component/em/Autoplay';
import { HashRouter,BrowserRouter } from "react-router-dom";
function App() {
  return (

    <HashRouter>
    <div className="App">
      <Main/>
   

    </div>
    
    </HashRouter>
  );
}

export default App;
