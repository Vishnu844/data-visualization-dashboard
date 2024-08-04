import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Insights from "./pages/Insights.jsx";
import Reports from "./pages/Reports.jsx";
import Analysis from "./pages/Analysis.jsx";
import Categories from "./pages/Categories.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="insights" element={<Insights />} />
            <Route path="categories" element={<Categories />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
