import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import C1SignUp from "./Challenges/Challenge-1/C1SignUp";
import C1Login from "./Challenges/Challenge-1/C1Login";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/C1/signUp" element={<C1SignUp />} />
      <Route path="/C1/login" element={<C1Login />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div className="App h-screen overflow-hidden">{routes}</div>;
};
export default App;
