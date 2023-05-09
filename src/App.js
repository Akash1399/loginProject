import './App.css';
import Routing from './routing/Routing';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
            <ToastContainer />
     <Routing/>
    </div>
  );
}

export default App;
