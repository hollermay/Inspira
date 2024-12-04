import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

createRoot(document.getElementById('root')).render(
    <App />

)
