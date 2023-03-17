import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleUser from "./pages/SingleUser";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<SingleUser />} />
      </Routes>
    </Router>
  );
}
