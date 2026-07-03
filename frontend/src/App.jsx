import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DonationSuccess from "./pages/DonationSuccess";
import DonationError from "./pages/DonationError";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<DonationSuccess />} />
        <Route path="/failed" element={<DonationError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;