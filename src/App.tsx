import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Projects, TechStack } from "./pages";
import { PortfolioLayout } from "./components/templates";

function App() {
  return (
    <>
      <Router>
        <PortfolioLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/techstack" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PortfolioLayout>
      </Router>
    </>
  );
}

export default App;
