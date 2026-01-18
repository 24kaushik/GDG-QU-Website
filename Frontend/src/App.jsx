import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./Pages/Team";
import Event from "./Pages/Event";
import MainLayout from "./MainLayout";
import AdminLayout from "./Pages/Admin/AdminLayout";
import Login from "./Pages/Login";
import Contributions from "./Pages/Contributions";
import Profile from "./Pages/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";

//TODO: Modularize the whole thing later

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <Router>
            <Routes>
              {/* Main Routes */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/events" element={<Event />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contributions" element={<Contributions />} />
                <Route path="/profile" element={<Profile />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin/*" element={<AdminLayout />}></Route>
            </Routes>
          </Router>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
