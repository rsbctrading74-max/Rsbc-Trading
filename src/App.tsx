/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageType, QuoteFormData } from './types';
import { COMPANY_DETAILS } from './data/companyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ImageModal } from './components/ImageModal';
import { HomePage } from './pages/HomePage';
import { CleaningPage } from './pages/CleaningPage';
import { CateringPage } from './pages/CateringPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalService, setQuoteModalService] = useState<QuoteFormData['serviceType']>('Cleaning');
  const [imageModalState, setImageModalState] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const handleOpenQuote = (service?: QuoteFormData['serviceType']) => {
    if (service) {
      setQuoteModalService(service);
    }
    setQuoteModalOpen(true);
  };

  const handleOpenImage = (url: string, title: string) => {
    setImageModalState({
      isOpen: true,
      url,
      title,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-[#C9A84C] selection:text-slate-950">
      {/* 3-Zone Top Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onRequestQuote={() => handleOpenQuote('All-in-One Multi-Service')}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onRequestQuote={handleOpenQuote}
            onOpenImageModal={handleOpenImage}
          />
        )}
        {currentPage === 'cleaning' && (
          <CleaningPage
            onNavigate={setCurrentPage}
            onRequestQuote={handleOpenQuote}
          />
        )}
        {currentPage === 'catering' && (
          <CateringPage
            onNavigate={setCurrentPage}
            onRequestQuote={handleOpenQuote}
          />
        )}
        {currentPage === 'maintenance' && (
          <MaintenancePage
            onNavigate={setCurrentPage}
            onRequestQuote={handleOpenQuote}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={setCurrentPage}
            onRequestQuote={() => handleOpenQuote('All-in-One Multi-Service')}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={setCurrentPage}
            onRequestQuote={() => handleOpenQuote('All-in-One Multi-Service')}
            onOpenImageModal={handleOpenImage}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Persistent Quiet Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onRequestQuote={() => handleOpenQuote('All-in-One Multi-Service')}
      />

      {/* Floating Action Buttons (Sticky WhatsApp & Call dispatch on mobile/desktop) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20RSBC%20Trading%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-2xl transition-all transform hover:scale-105"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        <a
          href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
          className="flex sm:hidden items-center justify-center w-12 h-12 rounded-full bg-[#C9A84C] text-slate-950 shadow-xl"
          aria-label="Direct Call Dispatch"
        >
          <PhoneCall className="w-5 h-5" />
        </a>
      </div>

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={quoteModalService}
      />

      {/* Lightbox Image Preview Modal */}
      <ImageModal
        isOpen={imageModalState.isOpen}
        onClose={() => setImageModalState({ isOpen: false, url: '', title: '' })}
        imageUrl={imageModalState.url}
        title={imageModalState.title}
      />
    </div>
  );
}
