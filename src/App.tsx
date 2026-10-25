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
    <div className="min-h-screen bg-keyviz-grid text-[#808080] font-sans flex flex-col selection:bg-[#808080] selection:text-[#F0F0F4]">
      {/* 顶部导航便签缩减至 2 个字 */}
      <Navbar 
        onOpenDownload={() => handleOpenDownload()} 
        onOpenSupporter={() => setSupporterModalOpen(true)} 
      />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero 
          onOpenDownload={() => handleOpenDownload()}
          onOpenSupporter={() => setSupporterModalOpen(true)}
        />

        {/* Section 2: Why Goote? */}
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
