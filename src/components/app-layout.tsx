'use client';

import AppHeader from '@/components/app-header';

export default function AppLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex h-screen min-h-screen flex-col bg-background">
      <AppHeader />
      {children}
    </div>
  );
}
