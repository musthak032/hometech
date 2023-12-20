import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animation/animation.css';
import './css/Style.css';
import './App.css';
import 'aos/dist/aos.css'
import Main from './screen/main/Main';



import Imgcontainer from './component/em/Autoplay';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Main/>
     {/* <Imgcontainer/> */}

    </div>
    
    </BrowserRouter>
  );
}

export default App;
