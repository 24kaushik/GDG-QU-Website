import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./Pages/Team";
import Event from "./Pages/Event";
import MainLayout from "./MainLayout";
import AdminLayout from "./Pages/Admin/AdminLayout";

//TODO: Modularize the whole thing later

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Main Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Event />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminLayout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
