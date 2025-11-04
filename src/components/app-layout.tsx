'use client';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex h-screen min-h-screen flex-col bg-background">
      <AppHeader />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <AppFooter />
    </div>
  );
}
