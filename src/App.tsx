/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyGoote } from './components/WhyGoote';
import { PowerfulTools } from './components/PowerfulTools';
import { DownloadSection } from './components/DownloadSection';
import { DownloadModal } from './components/DownloadModal';
import { ThemeSupporterModal } from './components/ThemeSupporterModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [supporterModalOpen, setSupporterModalOpen] = useState(false);
  const [downloadOs, setDownloadOs] = useState<string>('macos');

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

  return (
    <div className="min-h-screen bg-keyviz-dots text-neutral-900 font-sans flex flex-col selection:bg-black selection:text-white">
      {/* Keyviz Signature Clean Header */}
      <Navbar 
        onOpenDownload={() => handleOpenDownload()} 
        onOpenSupporter={() => setSupporterModalOpen(true)} 
      />

      <main className="flex-1">
        {/* Section 1: Hero with Giant Typographic Wordmark & Scattered 3D Keycaps (Screenshot 1) */}
        <Hero 
          onOpenDownload={() => handleOpenDownload()}
          onOpenSupporter={() => setSupporterModalOpen(true)}
        />

        {/* Section 2: Why Goote? with 3D Keycap + Dark Frame & Dock (Screenshot 2) */}
        <div id="why">
          <WhyGoote />
        </div>

        {/* Section 3: Powerful Tools Bento Grid (Screenshot 3) */}
        <div id="tools">
          <PowerfulTools />
        </div>

        {/* Section 4: Download & Support Pro Cards + Centered Keycaps (Screenshot 4) */}
        <div id="download">
          <DownloadSection 
            onOpenDownload={(os) => handleOpenDownload(os)}
            onOpenSupporter={() => setSupporterModalOpen(true)}
          />
        </div>
      </main>

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
    </div>
  );
}
