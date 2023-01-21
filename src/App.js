import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000}/>
      <RoutesApp />
    </div>
  );
}

export default App;
