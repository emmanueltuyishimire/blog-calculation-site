'use client';

import React from 'react';
import { SidebarHeader, SidebarContent as SidebarBody, SidebarFooter } from '@/components/ui/sidebar';
import { Sigma, Info, Mail, FileText, Shield, AlertTriangle, Milestone } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';

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
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/about">
                <Info />
                <span>About</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/contact">
                <Mail />
                <span>Contact</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/terms-and-conditions">
                <FileText />
                <span>Terms & Conditions</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/privacy-policy">
                <Shield />
                <span>Privacy Policy</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/disclaimer">
                <AlertTriangle />
                <span>Disclaimer</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/sitemap">
                <Milestone />
                <span>Sitemap</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarBody>
      <SidebarFooter>
        
      </SidebarFooter>
    </>
  );
}
