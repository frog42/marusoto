import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import PortfolioPage from './pages/PortfolioPage'
import HowTo from './pages/HowTo'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/H2CE2" element={<HowTo />} />
    </Routes>
  </BrowserRouter>
)
