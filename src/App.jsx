import { HashRouter, Routes, Route } from "react-router-dom";

// Import CSS
import "./App.css";

// Import Components
import { Landing } from "./pages/Landing";

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
