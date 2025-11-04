'use client';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { usePathname } from 'next/navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader />
      <main className={`flex-1`}>{children}</main>
      <AppFooter />
    </div>
  );
}
