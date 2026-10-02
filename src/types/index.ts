export type AppTheme = {
  id: string;
  name: string;
  subtitle: string;
  isPaid: boolean;
  bgClass: string;
  panelClass: string;
  borderClass: string;
  accentClass: string;
  accentTextClass: string;
  accentGlow: string;
  previewColor: string;
  fontFamily: string;
  description: string;
};

export type Platform = 'macos' | 'windows' | 'linux' | 'android' | 'ios';

export type DownloadInfo = {
  platform: Platform;
  name: string;
  icon: string;
  version: string;
  size: string;
  formats: { label: string; file: string; arch?: string }[];
  command?: string;
  sha256: string;
};

export type PluginItem = {
  id: string;
  name: string;
  author: string;
  downloads: string;
  rating: number;
  description: string;
  installed: boolean;
  tags: string[];
};
