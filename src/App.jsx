import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemProvider } from './context/ItemContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { BrowsePage } from './pages/BrowsePage';
import { ReportLostPage } from './pages/ReportLostPage';
import { ReportFoundPage } from './pages/ReportFoundPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AuthPage } from './pages/AuthPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <ItemProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/report-lost" element={<ReportLostPage />} />
              <Route path="/report-found" element={<ReportFoundPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;
