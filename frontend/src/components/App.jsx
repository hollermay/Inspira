import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import useAuthStore from "../stores/authStore"; 
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import TemplateManagementPage from "./TemplateManagementPage";
import Login from "./Login";
import SignUp from "./SignUp";
import ContributionForm from "./Contribute";
import Gallery from "./Gallery";
import SelfPage from "./SelfPage";
import Footer from "./Footer";
function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/admin" />} />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/admin" />} />
          <Route path="/admin" element={user ? <TemplateManagementPage /> : <Navigate to="/login" />} />
          <Route path = '/contributions' element = {<ContributionForm />} />
          <Route path = '/gallery' element = {<Gallery />} />
          <Route path="/templates/:templateId" element={<SelfPage />} />
          <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
