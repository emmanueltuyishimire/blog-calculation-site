'use client';

import React from 'react';
import { SidebarHeader, SidebarContent as SidebarBody, SidebarFooter } from '@/components/ui/sidebar';
import { Sigma } from 'lucide-react';

interface AppSidebarProps {
}

export default function AppSidebar({}: AppSidebarProps) {
  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <Sigma className="size-8 text-primary" />
          <h2 className="text-xl font-bold font-headline">Formula First</h2>
        </div>
      </SidebarHeader>
      <SidebarBody className="p-0">
      </SidebarBody>
      <SidebarFooter>
        
      </SidebarFooter>
    </>
  );
}
