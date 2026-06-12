/* =============================================================
   projects.js — YOUR PORTFOLIO DATA
   -------------------------------------------------------------
   ▶ TO ADD A PROJECT: copy one { ... } block below, paste it at
     the top of the list, and edit the fields. That's the whole
     job — the homepage and detail pages update automatically.

   Fields:
     slug       url-safe id, used in the link (no spaces)   [required]
     title      display name                                [required]
     blurb      one-line summary shown on the card          [required]
     year       when you built it                           [required]
     tags       tech / tools, shown as chips                [required]
     repo       GitHub URL ("" to hide the button)
     demo       live demo URL ("" to hide the button)
     story      array of paragraphs for the detail page
     highlights array of short bullet points (optional)
   ============================================================= */

window.PROJECTS = [
  {
    slug: "treetop",
    title: "Treetop Management",
    blurb: "Full practice-management desktop app for a CPA firm — engagements, time tracking, billing, and AR on a local LAN.",
    year: "2026",
    tags: ["electron", "react", "node.js", "sqlite"],
    repo: "https://github.com/cjmdevs/Treetop",
    demo: "",
    screenshot: "screenshots/treetop.png",
    story: [
      "Built for an actual CPA firm's day-to-day workflow — engagements, projects, time tracking, invoicing, accounts receivable, due dates, contacts, staff, and workflow automations. The kind of thing that usually costs a fortune in SaaS subscriptions.",
      "It runs as a proper desktop app (Electron) with a local Node/SQLite server on the office LAN. Every workstation connects to one shared database over the network, no cloud required. The installer drops on Windows machines and just works."
    ],
    highlights: [
      "Electron desktop client + Express/SQLite server over LAN",
      "Full billing, AR, invoicing, and engagement tracking",
      "JWT auth with invite-key onboarding for team members",
      "Windows installer built with electron-builder"
    ]
  },
  {
    slug: "financial-tracker",
    title: "Financial Tracker",
    blurb: "Personal finance on your terms — accounts, budgets, recurring expenses, and savings goals. Installable as a PWA.",
    year: "2026",
    tags: ["next.js", "supabase", "typescript", "tailwind"],
    repo: "https://github.com/cjmdevs/Financial-Tracker",
    demo: "",
    screenshot: "screenshots/financial-tracker.png",
    story: [
      "I wanted a finance tracker that didn't require a subscription, didn't sell my data, and worked like a real app on my phone. So I built one with Next.js and Supabase — free to host, installable as a PWA, and actually fast.",
      "It tracks accounts and net worth, handles recurring expenses automatically, and has custom budgets that can be set as a fixed dollar amount or a percentage of income. The whole thing runs on SQL views so the numbers are always consistent."
    ],
    highlights: [
      "Accounts, net worth, budgets, recurring expenses, savings goals",
      "Installable PWA — works on phone and desktop",
      "CSV import with auto-categorization",
      "Free to host on Vercel + Supabase"
    ]
  }
];
