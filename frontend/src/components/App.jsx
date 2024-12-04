import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import TemplateManagementPage from './TemplateManagementPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin" element={<TemplateManagementPage />} /> {/* Admin page for CRUD operations */}
                <Route path="/templates/:id" element={<TemplateManagementPage />} /> {/* View full template */}
            </Routes>
        </Router>
    );
}

export default App;
