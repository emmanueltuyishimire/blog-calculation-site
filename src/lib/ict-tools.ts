
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
            { name: "IP Address to Binary Converter", href: "https://ict.calculation.site/tools/ip-to-binary" },
            { name: "Binary to IP Address Converter", href: "https://ict.calculation.site/tools/binary-to-ip" },
            { name: "Subnet Calculator", href: "https://ict.calculation.site/tools/subnet-calculator" },
            { name: "Subnet Mask Converter", href: "https://ict.calculation.site/tools/subnet-mask-converter" },
            { name: "VLSM Calculator", href: "https://ict.calculation.site/tools/vlsm-calculator" },
            { name: "Network Bandwidth Estimator", href: "https://ict.calculation.site/tools/bandwidth-estimator" },
            { name: "Ping / Latency Estimator", href: "https://ict.calculation.site/tools/latency-estimator" },
            { name: "Data Transfer Time Calculator", href: "https://ict.calculation.site/tools/data-transfer-calculator" },
            { name: "MAC Address Validator", href: "https://ict.calculation.site/tools/mac-validator" },
            { name: "Port Number Lookup", href: "https://ict.calculation.site/tools/port-lookup" },
            { name: "Network Mask Validator", href: "https://ict.calculation.site/tools/network-mask-validator" },
            { name: "Public vs Private IP Checker", href: "https://ict.calculation.site/tools/ip-privacy-checker" },
            { name: "IP Class Finder", href: "https://ict.calculation.site/tools/ip-class-finder" },
            { name: "IP Range Generator", href: "https://ict.calculation.site/tools/ip-range-generator" },
            { name: "Broadcast Address Calculator", href: "https://ict.calculation.site/tools/broadcast-address-calculator" },
            { name: "Host Count Calculator", href: "https://ict.calculation.site/tools/host-count-calculator" },
            { name: "Network Address Calculator", href: "https://ict.calculation.site/tools/network-address-calculator" },
            { name: "CIDR to Subnet List Generator", href: "https://ict.calculation.site/tools/cidr-to-subnet-list" },
            { name: "CIDR to Wildcard Mask Converter", href: "https://ict.calculation.site/tools/cidr-to-wildcard" },
            { name: "IP Summarization Tool", href: "https://ict.calculation.site/tools/ip-summarization" },
        ]
    },
    {
        name: "Web & Server Tools",
        description: "Tools for analyzing web servers, domains, and performance.",
        icon: Server,
        tools: [
            { name: "HTTP Header Checker", href: "https://ict.calculation.site/tools/http-header-checker" },
            { name: "HTTP Request Size Calculator", href: "https://ict.calculation.site/tools/http-request-size-calculator" },
            { name: "SSL Certificate Expiration Checker", href: "https://ict.calculation.site/tools/ssl-expiry-checker" },
            { name: "URL Encoder / Decoder", href: "https://ict.calculation.site/tools/url-encoder-decoder" },
            { name: "HTML / CSS / JS Minifier", href: "https://ict.calculation.site/tools/code-minifier" },
            { name: "Robots.txt Validator / Generator", href: "https://ict.calculation.site/tools/robots-txt-tool" },
            { name: "Sitemap Generator (static)", href: "https://ict.calculation.site/tools/sitemap-generator" },
            { name: "Response Time Calculator", href: "https://ict.calculation.site/tools/response-time-calculator" },
            { name: "Domain Expiration Countdown", href: "https://ict.calculation.site/tools/domain-expiry-countdown" },
            { name: "SSL Checker", href: "https://ict.calculation.site/tools/ssl-checker" },
            { name: "Server Uptime Calculator", href: "https://ict.calculation.site/tools/uptime-calculator" },
            { name: "DNS Lookup Tool", href: "https://ict.calculation.site/tools/dns-lookup" },
            { name: "Reverse DNS Lookup", href: "https://ict.calculation.site/tools/reverse-dns-lookup" },
            { name: "Whois Lookup", href: "https://ict.calculation.site/tools/whois-lookup" },
            { name: "Webpage Load Time Estimator", href: "https://ict.calculation.site/tools/load-time-estimator" },
            { name: "Cache Expiration Calculator", href: "https://ict.calculation.site/tools/cache-expiry-calculator" },
            { name: "Compression Savings Estimator", href: "https://ict.calculation.site/tools/compression-estimator" },
            { name: "CDN Bandwidth Estimator", href: "https://ict.calculation.site/tools/cdn-bandwidth-estimator" },
        ]
    },
    {
        name: "Programming & Code",
        description: "Utilities for developers to format, generate, and convert code.",
        icon: Code,
        tools: [
            { name: "Code Formatter / Beautifier", href: "https://ict.calculation.site/tools/code-formatter" },
            { name: "Regex Tester / Generator", href: "https://ict.calculation.site/tools/regex-tester" },
            { name: "Base64 Encoder / Decoder", href: "https://ict.calculation.site/tools/base64-encoder-decoder" },
            { name: "Hex ↔ RGB Color Converter", href: "https://ict.calculation.site/tools/color-converter" },
            { name: "Color Palette Generator", href: "https://ict.calculation.site/tools/color-palette-generator" },
            { name: "Binary ↔ Decimal ↔ Hex Converter", href: "https://ict.calculation.site/tools/number-converter" },
            { name: "MD5 / SHA Hash Generator", href: "https://ict.calculation.site/tools/hash-generator-md5-sha" },
            { name: "ROT13 Encoder / Decoder", href: "https://ict.calculation.site/tools/rot13-encoder-decoder" },
            { name: "Caesar Cipher Encoder / Decoder", href: "https://ict.calculation.site/tools/caesar-cipher" },
            { name: "Time Complexity Estimator", href: "https://ict.calculation.site/tools/big-o-calculator" },
            { name: "Prime Number Checker", href: "https://ict.calculation.site/tools/prime-checker" },
            { name: "Prime Number Generator", href: "https://ict.calculation.site/tools/prime-number-generator" },
            { name: "Fibonacci Sequence Generator", href: "https://ict.calculation.site/tools/fibonacci-generator" },
            { name: "Factorial Calculator", href: "https://ict.calculation.site/tools/factorial-calculator" },
            { name: "Random String Generator", href: "https://ict.calculation.site/tools/random-string-generator" },
            { name: "Random Number Generator", href: "https://ict.calculation.site/tools/random-number-generator" },
            { name: "Code Snippet Formatter", href: "https://ict.calculation.site/tools/code-snippet-formatter" },
            { name: "Variable Name Validator", href: "https://ict.calculation.site/tools/variable-name-validator" },
            { name: "Unicode / ASCII Converter", href: "https://ict.calculation.site/tools/unicode-ascii-converter" },
        ]
    },
    {
        name: "Security & Password",
        description: "Tools for generating secure passwords and handling encryption.",
        icon: ShieldCheck,
        tools: [
            { name: "Password Generator", href: "https://ict.calculation.site/tools/password-generator" },
            { name: "Password Strength Checker", href: "https://ict.calculation.site/tools/password-strength-checker" },
            { name: "Password Entropy Calculator", href: "https://ict.calculation.site/tools/password-entropy-calculator" },
            { name: "Encryption / Decryption Tool", href: "https://ict.calculation.site/tools/encryption-decryption-tool" },
            { name: "Two-Factor Auth TOTP Demo", href: "https://ict.calculation.site/tools/totp-demo" },
            { name: "Base32 / Base58 Encoder / Decoder", href: "https://ict.calculation.site/tools/base32-58-encoder-decoder" },
            { name: "File Integrity Checker", href: "https://ict.calculation.site/tools/file-integrity-checker" },
        ]
    },
    {
        name: "Cloud & Storage Tools",
        description: "Estimators for cloud costs, storage requirements, and data management.",
        icon: Cloud,
        tools: [
            { name: "Cloud Storage Cost Estimator", href: "https://ict.calculation.site/tools/cloud-storage-cost-estimator" },
            { name: "Cloud Bandwidth Cost Calculator (Egress)", href: "https://ict.calculation.site/tools/bandwidth-cost-calculator" },
            { name: "Backup Storage Requirement", href: "https://ict.calculation.site/tools/backup-storage-calculator" },
            { name: "Data Compression Calculator", href: "https://ict.calculation.site/tools/data-compression-calculator" },
            { name: "VM RAM & CPU Requirement", href: "https://ict.calculation.site/tools/vm-requirement-estimator" },
            { name: "Disk Usage / Partition Estimator", href: "https://ict.calculation.site/tools/disk-usage-estimator" },
            { name: "Cloud Instance Cost Calculator", href: "https://ict.calculation.site/tools/cloud-instance-cost-calculator" },
            { name: "Storage vs. Memory Cost Analyzer", href: "https://ict.calculation.site/tools/storage-memory-cost-analyzer" },
            { name: "File Conversion Estimator", href: "https://ict.calculation.site/tools/file-conversion-estimator" },
            { name: "Data Retention Period Calculator", href: "https://ict.calculation.site/tools/data-retention-calculator" },
            { name: "Snapshot / Backup Scheduler", href: "https://ict.calculation.site/tools/backup-scheduler" },
            { name: "Storage Growth Estimator", href: "https://ict.calculation.site/tools/storage-growth-estimator" },
            { name: "RAID Storage Calculator", href: "https://ict.calculation.site/tools/raid-calculator" },
        ]
    },
    {
        name: "Database & Admin Tools",
        description: "Utilities for database administrators and system management.",
        icon: Database,
        tools: [
            { name: "Database Row / Storage Estimator", href: "https://ict.calculation.site/tools/db-storage-estimator" },
            { name: "User Quota Calculator", href: "/coming-soon" },
            { name: "Transaction / TPS Calculator", href: "/coming-soon" },
            { name: "Log Rotation Calculator", href: "/coming-soon" },
            { name: "Database Index Size Calculator", href: "/coming-soon" },
            { name: "Query Execution Time Estimator", href: "/coming-soon" },
            { name: "Database Growth Calculator", href: "https://ict.calculation.site/tools/db-growth-calculator" },
            { name: "Primary / Foreign Key Validator", href: "https://ict.calculation.site/tools/key-validator" },
            { name: "Normalization Checker", href: "https://ict.calculation.site/tools/normalization-checker" },
            { name: "Duplicate Row Finder", href: "https://ict.calculation.site/tools/duplicate-row-finder" },
            { name: "Column Type Converter", href: "https://ict.calculation.site/tools/column-type-converter" },
            { name: "Database Health Checker", href: "https://ict.calculation.site/tools/db-health-checker" },
        ]
    },
    {
        name: "Learning Tools",
        description: "Experimental tools for exploring algorithms and AI concepts.",
        icon: BrainCircuit,
        tools: [
            { name: "Time Complexity Estimator", href: "https://ict.calculation.site/tools/big-o-calculator" },
            { name: "Algorithm Step Simulator", href: "https://ict.calculation.site/tools/algorithm-simulator" },
            { name: "Recursion Calculator / Simulator", href: "https://ict.calculation.site/tools/recursion-simulator" },
        ]
    }
];

    