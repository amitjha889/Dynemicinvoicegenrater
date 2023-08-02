import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Billing from "./Billing/Invoice";


function App() {
  return (
   
   
   <div className="App" >

    <Router>
          
        
        <Routes>
  
          <Route   element={<Billing />}    path="/billing"   />

        </Routes>


      </Router>
    
    </div>
    
  );
}

export default App;
