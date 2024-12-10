import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="error" element={<ErrorPage/> } />
    </Routes>
</BrowserRouter>
)
