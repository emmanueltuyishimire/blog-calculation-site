import { Network, Server, Code, ShieldCheck, Cloud, Database, BrainCircuit } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

type ToolLink = {
    name: string;
    href: string;
};

type IctCategory = {
    name: string;
    description: string;
    icon: LucideIcon;
    tools: ToolLink[];
};

export const ictToolCategories: IctCategory[] = [
    {
        name: "Networking & IP Tools",
        description: "Utilities for IP address management, subnetting, and network analysis.",
        icon: Network,
        tools: [
            { name: "IP Address to Binary Converter", href: "/coming-soon" },
            { name: "Binary to IP Address Converter", href: "/coming-soon" },
            { name: "Subnet Calculator", href: "/coming-soon" },
            { name: "Subnet Mask Converter", href: "/coming-soon" },
            { name: "VLSM Calculator", href: "/coming-soon" },
            { name: "Network Bandwidth Estimator", href: "/coming-soon" },
            { name: "Ping / Latency Estimator", href: "/coming-soon" },
            { name: "Data Transfer Time Calculator", href: "/coming-soon" },
            { name: "MAC Address Validator", href: "/coming-soon" },
            { name: "Port Number Lookup", href: "/coming-soon" },
            { name: "Network Mask Validator", href: "/coming-soon" },
            { name: "Public vs Private IP Checker", href: "/coming-soon" },
            { name: "IP Class Finder", href: "/coming-soon" },
            { name: "IP Range Generator", href: "/coming-soon" },
            { name: "Broadcast Address Calculator", href: "/coming-soon" },
            { name: "Host Count Calculator", href: "/coming-soon" },
            { name: "Network Address Calculator", href: "/coming-soon" },
            { name: "CIDR to Subnet List Generator", href: "/coming-soon" },
            { name: "CIDR to Wildcard Mask Converter", href: "/coming-soon" },
            { name: "IP Summarization Tool", href: "/coming-soon" },
        ]
    },
    {
        name: "Web & Server Tools",
        description: "Tools for analyzing web servers, domains, and performance.",
        icon: Server,
        tools: [
            { name: "HTTP Header Checker", href: "/coming-soon" },
            { name: "HTTP Request Size Calculator", href: "/coming-soon" },
            { name: "SSL Certificate Expiration Checker", href: "/coming-soon" },
            { name: "URL Encoder / Decoder", href: "/coming-soon" },
            { name: "HTML / CSS / JS Minifier", href: "/coming-soon" },
            { name: "Robots.txt Validator / Generator", href: "/coming-soon" },
            { name: "Sitemap Generator (static)", href: "/coming-soon" },
            { name: "Response Time Calculator", href: "/coming-soon" },
            { name: "Domain Expiration Countdown", href: "/coming-soon" },
            { name: "SSL Checker", href: "/coming-soon" },
            { name: "Server Uptime Calculator", href: "/coming-soon" },
            { name: "DNS Lookup Tool", href: "/coming-soon" },
            { name: "Reverse DNS Lookup", href: "/coming-soon" },
            { name: "Whois Lookup", href: "/coming-soon" },
            { name: "Webpage Load Time Estimator", href: "/coming-soon" },
            { name: "Cache Expiration Calculator", href: "/coming-soon" },
            { name: "Compression Savings Estimator", href: "/coming-soon" },
            { name: "CDN Bandwidth Estimator", href: "/coming-soon" },
        ]
    },
    {
        name: "Programming & Code",
        description: "Utilities for developers to format, generate, and convert code.",
        icon: Code,
        tools: [
            { name: "Code Formatter / Beautifier", href: "/coming-soon" },
            { name: "Regex Tester / Generator", href: "/coming-soon" },
            { name: "Base64 Encoder / Decoder", href: "/coming-soon" },
            { name: "Hex ↔ RGB Color Converter", href: "/coming-soon" },
            { name: "Color Palette Generator", href: "/coming-soon" },
            { name: "Binary ↔ Decimal ↔ Hex Converter", href: "/coming-soon" },
            { name: "MD5 / SHA Hash Generator", href: "/coming-soon" },
            { name: "ROT13 Encoder / Decoder", href: "/coming-soon" },
            { name: "Caesar Cipher Encoder / Decoder", href: "/coming-soon" },
            { name: "Time Complexity Estimator", href: "/coming-soon" },
            { name: "Prime Number Checker", href: "/coming-soon" },
            { name: "Prime Number Generator", href: "/coming-soon" },
            { name: "Fibonacci Sequence Generator", href: "/coming-soon" },
            { name: "Factorial Calculator", href: "/coming-soon" },
            { name: "Random String Generator", href: "/coming-soon" },
            { name: "Random Number Generator", href: "/coming-soon" },
            { name: "Code Snippet Formatter", href: "/coming-soon" },
            { name: "Variable Name Validator", href: "/coming-soon" },
            { name: "Unicode / ASCII Converter", href: "/coming-soon" },
        ]
    },
    {
        name: "Security & Password",
        description: "Tools for generating secure passwords and handling encryption.",
        icon: ShieldCheck,
        tools: [
            { name: "Password Generator", href: "/coming-soon" },
            { name: "Password Strength Checker", href: "/coming-soon" },
            { name: "Password Entropy Calculator", href: "/coming-soon" },
            { name: "Encryption / Decryption Tool", href: "/coming-soon" },
            { name: "Two-Factor Auth TOTP Demo", href: "/coming-soon" },
            { name: "Base32 / Base58 Encoder / Decoder", href: "/coming-soon" },
            { name: "File Integrity Checker", href: "/coming-soon" },
        ]
    },
    {
        name: "Cloud & Storage Tools",
        description: "Estimators for cloud costs, storage requirements, and data management.",
        icon: Cloud,
        tools: [
            { name: "Cloud Storage Cost Estimator", href: "/coming-soon" },
            { name: "Cloud Bandwidth Cost Calculator (Egress)", href: "/coming-soon" },
            { name: "Backup Storage Requirement", href: "/coming-soon" },
            { name: "Data Compression Calculator", href: "/coming-soon" },
            { name: "VM RAM & CPU Requirement", href: "/coming-soon" },
            { name: "Disk Usage / Partition Estimator", href: "/coming-soon" },
            { name: "Cloud Instance Cost Calculator", href: "/coming-soon" },
            { name: "Storage vs. Memory Cost Analyzer", href: "/coming-soon" },
            { name: "File Conversion Estimator", href: "/coming-soon" },
            { name: "Data Retention Period Calculator", href: "/coming-soon" },
            { name: "Snapshot / Backup Scheduler", href: "/coming-soon" },
            { name: "Storage Growth Estimator", href: "/coming-soon" },
            { name: "RAID Storage Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Database & Admin Tools",
        description: "Utilities for database administrators and system management.",
        icon: Database,
        tools: [
            { name: "Database Row / Storage Estimator", href: "/coming-soon" },
            { name: "User Quota Calculator", href: "/coming-soon" },
            { name: "Transaction / TPS Calculator", href: "/coming-soon" },
            { name: "Log Rotation Calculator", href: "/coming-soon" },
            { name: "Database Index Size Calculator", href: "/coming-soon" },
            { name: "Query Execution Time Estimator", href: "/coming-soon" },
            { name: "Database Growth Calculator", href: "/coming-soon" },
            { name: "Primary / Foreign Key Validator", href: "/coming-soon" },
            { name: "Normalization Checker", href: "/coming-soon" },
            { name: "Duplicate Row Finder", href: "/coming-soon" },
            { name: "Column Type Converter", href: "/coming-soon" },
            { name: "Database Health Checker", href: "/coming-soon" },
        ]
    },
    {
        name: "Learning Tools",
        description: "Experimental tools for exploring algorithms and AI concepts.",
        icon: BrainCircuit,
        tools: [
            { name: "Time Complexity Estimator", href: "/coming-soon" },
            { name: "Algorithm Step Simulator", href: "/coming-soon" },
            { name: "Recursion Calculator / Simulator", href: "/coming-soon" },
        ]
    }
];
