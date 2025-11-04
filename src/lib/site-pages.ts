
import { Info, Mail, FileText, Shield, Handshake, Newspaper } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

type SitePage = {
    title: string;
    href: string;
    icon: LucideIcon;
};

export const sitePages: SitePage[] = [
    {
        title: "About Us",
        href: "/about",
        icon: Info,
    },
    {
        title: "Contact",
        href: "/contact",
        icon: Mail,
    },
    {
        title: "Blog",
        href: "/blog",
        icon: Newspaper,
    },
    {
        title: "Disclaimer",
        href: "/disclaimer",
        icon: FileText,
    },
    {
        title: "Privacy Policy",
        href: "/privacy-policy",
        icon: Shield,
    },
    {
        title: "Terms of Service",
        href: "/terms-and-conditions",
        icon: Handshake,
    }
];
