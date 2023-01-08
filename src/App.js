import About from './About';
import './App.css';
import Awards from './Awards';
import Education from './Education';
import Experience from './Experience';
import Menu from'./Menu';
import Skills from './Skills';

function App() {
  return (
    <>    
        <Menu/>
        <div className="container-fluid p-0">  
          <About/>  
          <hr className="m-0" />
          <Experience/>
          <hr className="m-0" />
          <Education/>
          <hr class="m-0" />
          <Skills/>
          <hr class="m-0" />
          <Awards/>

        </div> 
    </>
  );
}

export default App;
