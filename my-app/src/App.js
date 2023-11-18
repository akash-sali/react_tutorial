import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbars';
import TextForm from './components/TextForm';
let name = "akash 12";
function App() {
  return (
    <>
    <Navbar title="React"/>
    <div className="container">
      <TextForm heading="Convert to uppecase latter"/>
    </div>
    
    </>
  );
}

export default App;
