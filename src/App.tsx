/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyGoote } from './components/WhyGoote';
import { PowerfulTools } from './components/PowerfulTools';
import { DownloadSection } from './components/DownloadSection';
import { DownloadModal } from './components/DownloadModal';
import { ThemeSupporterModal } from './components/ThemeSupporterModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { LegalTermsModal, LegalTabType } from './components/LegalTermsModal';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';

function MainApp() {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [supporterModalOpen, setSupporterModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTabType>('terms');
  const [downloadOs, setDownloadOs] = useState<string>('macos');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        if (['#why', '#tools', '#download', ''].includes(hash)) {
          setCurrentView('home');
        }
        if (hash === '#privacy') {
          setPrivacyModalOpen(true);
        } else if (hash === '#terms') {
          setLegalModalTab('terms');
          setLegalModalOpen(true);
        } else if (hash === '#ai-aup' || hash === '#aup') {
          setLegalModalTab('ai');
          setLegalModalOpen(true);
        } else if (hash === '#refund') {
          setLegalModalTab('refund');
          setLegalModalOpen(true);
        } else if (hash === '#support' || hash === '#contact') {
          setLegalModalTab('support');
          setLegalModalOpen(true);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenDownload = (os?: string) => {
    if (os) {
      setDownloadOs(os);
    } else {
      const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
      if (/windows|win32/i.test(userAgent)) {
        setDownloadOs('windows');
      } else if (/linux/i.test(userAgent) && !/android/i.test(userAgent)) {
        setDownloadOs('linux');
      } else {
        setDownloadOs('macos');
      }
    }
    setDownloadModalOpen(true);
  };

  const handleOpenAbout = () => {
    setCurrentView('about');
    window.location.hash = '#about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    if (window.location.hash === '#about') {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-keyviz-grid text-[#808080] font-sans flex flex-col selection:bg-[#808080] selection:text-[#F0F0F4]">
      {/* 顶部导航便签与语言切换 */}
      <Navbar 
        onOpenDownload={() => handleOpenDownload()} 
        onOpenSupporter={() => setSupporterModalOpen(true)}
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => {
          setLegalModalTab('terms');
          setLegalModalOpen(true);
        }}
        onOpenAbout={handleOpenAbout}
        onNavigateHome={handleNavigateHome}
        currentView={currentView}
      />

      <main className="flex-1">
        {currentView === 'about' ? (
          <AboutView
            onBack={handleNavigateHome}
            onOpenDownload={() => handleOpenDownload()}
            onOpenSupporter={() => setSupporterModalOpen(true)}
          />
        ) : (
          <>
            {/* Section 1: Hero */}
            <Hero 
              onOpenDownload={() => handleOpenDownload()}
              onOpenSupporter={() => setSupporterModalOpen(true)}
            />

            {/* Section 2: Why Neinote? */}
            <div id="why">
              <WhyGoote />
            </div>

            {/* Section 3: Powerful Tools Bento Grid */}
            <div id="tools">
              <PowerfulTools />
            </div>

            {/* Section 4: Download & Support Pro Cards */}
            <div id="download">
              <DownloadSection 
                onOpenDownload={(os) => handleOpenDownload(os)}
                onOpenSupporter={() => setSupporterModalOpen(true)}
              />
            </div>
          </>
        )}
      </main>

      {/* Obsidian-Style Clean Dark Footer */}
      <Footer 
        onOpenDownload={() => handleOpenDownload()}
        onOpenSupporter={() => setSupporterModalOpen(true)}
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        onOpenTerms={(tab) => {
          setLegalModalTab(tab || 'terms');
          setLegalModalOpen(true);
        }}
        onOpenAbout={handleOpenAbout}
      />

      {/* Download Modal */}
      <DownloadModal 
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        osTarget={downloadOs}
      />

      {/* Support Pro Theme Modal */}
      <ThemeSupporterModal
        isOpen={supporterModalOpen}
        onClose={() => setSupporterModalOpen(false)}
      />

      {/* Public Bilingual Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => {
          setPrivacyModalOpen(false);
          if (window.location.hash === '#privacy') {
            history.pushState(null, '', window.location.pathname + window.location.search);
          }
        }}
      />

      {/* Public Bilingual Legal Terms & MoR Compliance Modal */}
      <LegalTermsModal
        isOpen={legalModalOpen}
        onClose={() => {
          setLegalModalOpen(false);
          if (['#terms', '#ai-aup', '#aup', '#refund', '#support', '#contact'].includes(window.location.hash)) {
            history.pushState(null, '', window.location.pathname + window.location.search);
          }
        }}
        initialTab={legalModalTab}
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
