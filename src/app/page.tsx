"use client";
import React from "react";

// --- Simple utility types & mocks (replace later with real data from AppSync) ---
type Issue = { id: string; title: string; summary: string; tags?: string[] };
const trendingIssues: Issue[] = [
  { id: "1", title: "Cost of Living & Jobs", summary: "Wages, SMEs, youth employment, and diaspora investment pathways." },
  { id: "2", title: "Healthcare Access", summary: "Universal coverage, NHIF reforms, and diaspora medical missions." },
  { id: "3", title: "Education & Skills", summary: "TVET, scholarships, and credential recognition for returnees." },
];

const faces = Array.from({ length: 36 }).map((_, i) => ({
  id: i.toString(),
  name: `Member ${i + 1}`,
}));

// --- Layout helpers ---
function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm md:text-base text-gray-600 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded-full border px-3 py-1 text-xs md:text-sm">{children}</span>;
}

// --- Hero Collage ---
function HeroCollage() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-3xl md:text-5xl font-bold leading-tight">
              A Home for the <span className="text-emerald-700">Matiang'i</span> Movement
            </div>
            <p className="mt-4 text-gray-600 md:text-lg">
              Connect chapters worldwide, rally around issues that matter, and turn insight into action.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Community</Pill>
              <Pill>Issues</Pill>
              <Pill>Chapters</Pill>
              <Pill>Data‑Driven</Pill>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#heatmap" className="rounded-2xl bg-emerald-700 text-white px-5 py-3 text-sm md:text-base shadow hover:bg-emerald-800">Explore Map</a>
              <a href="/donate" className="rounded-2xl border px-5 py-3 text-sm md:text-base hover:bg-gray-50">Donate</a>
            </div>
          </div>

          {/* Collage grid */}
          <div className="grid grid-cols-6 gap-2 md:gap-3">
            {faces.map((f) => (
              <div
                key={f.id}
                className="aspect-square rounded-2xl shadow-sm border flex items-center justify-center text-xs md:text-sm font-medium"
                style={{ background: `linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))` }}
              >
                {f.name.split(" ").map((n) => n[0]).join("")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Trending Issues ---
function TrendingIssues() {
  return (
    <Section
      title="Trending now"
      subtitle="Live topics surfaced by the community. Replace this mock with GraphQL query results."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trendingIssues.map((issue) => (
          <div key={issue.id} className="rounded-2xl border p-5 shadow-sm bg-white">
            <h3 className="font-semibold text-lg">{issue.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{issue.summary}</p>
            <div className="mt-4">
              <a href={`/issues/${issue.id}`} className="text-emerald-700 text-sm font-medium">Read more →</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// --- Heatmap (placeholder) ---
function HeatmapSection() {
  return (
    <Section
      title="Global presence"
      subtitle="Heat clusters of members and chapters. This placeholder is ready for MapLibre + Amazon Location tiles."
    >
      <div id="heatmap" className="h-96 w-full rounded-2xl border shadow-sm bg-[conic-gradient(at_top_left,_#ecfeff,_#f0fdf4)] grid place-items-center">
        <div className="text-center">
          <div className="text-gray-800 font-semibold">Interactive Map Placeholder</div>
          <p className="text-gray-600 text-sm mt-2 max-w-md">
            Wire up MapLibre GL JS here and feed a GeoJSON of member coordinates (opt‑in). Use a heatmap
            layer and a circle layer for zoomed‑in views. Add a chapter boundary overlay later.
          </p>
          <a href="/docs/map-setup" className="inline-block mt-3 text-emerald-700 text-sm font-medium">View map setup notes →</a>
        </div>
      </div>
    </Section>
  );
}

// --- Chapters CTA ---
function ChaptersCTA() {
  return (
    <Section title="Local chapters" subtitle="Form or join a chapter to coordinate on the ground.">
      <div className="rounded-2xl border p-6 md:p-8 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-gray-700 max-w-2xl">
          Start a chapter in your city, or join an existing one. Chapter leads get tools for events, member management, and updates.
        </p>
        <div className="flex gap-3">
          <a href="/chapters" className="rounded-2xl bg-emerald-700 text-white px-5 py-3 text-sm shadow hover:bg-emerald-800">Browse chapters</a>
          <a href="/chapters/new" className="rounded-2xl border px-5 py-3 text-sm hover:bg-gray-50">Create a chapter</a>
        </div>
      </div>
    </Section>
  );
}

// --- Social strip ---
function SocialsStrip() {
  return (
    <Section title="From our channels" subtitle="Embed X/Twitter, YouTube, Facebook, TikTok here.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border bg-white p-4 h-72 grid place-items-center text-sm text-gray-600">X/Twitter timeline embed</div>
        <div className="rounded-2xl border bg-white p-4 h-72 grid place-items-center text-sm text-gray-600">YouTube playlist embed</div>
        <div className="rounded-2xl border bg-white p-4 h-72 grid place-items-center text-sm text-gray-600">Facebook page plugin</div>
      </div>
    </Section>
  );
}

// --- Insights / Data schematics (placeholder) ---
function InsightsSection() {
  return (
    <Section
      title="Community insights"
      subtitle="Use Recharts or similar to visualize gender, age brackets, and regional distribution."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border bg-white p-4 h-60 grid place-items-center text-sm text-gray-600">Gender by region</div>
        <div className="rounded-2xl border bg-white p-4 h-60 grid place-items-center text-sm text-gray-600">Age brackets</div>
        <div className="rounded-2xl border bg-white p-4 h-60 grid place-items-center text-sm text-gray-600">Top chapters</div>
      </div>
    </Section>
  );
}

// --- Merch CTA ---
function MerchCTA() {
  return (
    <Section title="Merchandise" subtitle="Support the movement and spark conversations.">
      <div className="rounded-2xl border p-6 md:p-8 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-gray-700 max-w-2xl">Caps, tees, stickers, and more. Integrate Stripe Checkout now; add M‑Pesa later.</p>
        <a href="/merch" className="rounded-2xl bg-emerald-700 text-white px-5 py-3 text-sm shadow hover:bg-emerald-800">Shop merch</a>
      </div>
    </Section>
  );
}

// --- Brand kit CTA ---
function BrandKitCTA() {
  return (
    <Section title="Brand kit" subtitle="Logo placement, colors, and typography—kept consistent across chapters.">
      <div className="rounded-2xl border p-6 md:p-8 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-gray-700 max-w-2xl">Download logos, get color tokens, and see examples of correct usage for banners and social posts.</p>
        <a href="/brand" className="rounded-2xl border px-5 py-3 text-sm hover:bg-gray-50">Open brand kit</a>
      </div>
    </Section>
  );
}

// --- Donate CTA ---
function DonateCTA() {
  return (
    <Section title="Donate" subtitle="Every contribution moves the mission forward.">
      <div className="rounded-2xl border p-6 md:p-8 bg-[radial-gradient(circle_at_top_left,_#ecfeff,_#ffffff)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-gray-700 max-w-2xl">
          Start with Stripe Checkout for credit/debit cards. Record receipts in the <code>Donation</code> model. Add mobile money (M‑Pesa Daraja) next.
        </p>
        <a href="/donate" className="rounded-2xl bg-emerald-700 text-white px-5 py-3 text-sm shadow hover:bg-emerald-800">Give now</a>
      </div>
    </Section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#ffffff,_#f8fafc)]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold tracking-tight">Matiang'i Community</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#issues" className="hover:text-emerald-700">Issues</a>
            <a href="#heatmap" className="hover:text-emerald-700">Map</a>
            <a href="/chapters" className="hover:text-emerald-700">Chapters</a>
            <a href="/insights" className="hover:text-emerald-700">Insights</a>
            <a href="/merch" className="hover:text-emerald-700">Merch</a>
            <a href="/brand" className="hover:text-emerald-700">Brand Kit</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm">Sign in</a>
            <a href="/donate" className="rounded-xl bg-emerald-700 text-white px-4 py-2 text-sm shadow hover:bg-emerald-800">Donate</a>
          </div>
        </div>
      </header>

      <HeroCollage />

      <div id="issues">
        <TrendingIssues />
      </div>

      <HeatmapSection />
      <ChaptersCTA />
      <SocialsStrip />
      <InsightsSection />
      <MerchCTA />
      <BrandKitCTA />
      <DonateCTA />

      <footer className="mt-10 border-t">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Matiang'i Community. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-emerald-700">Privacy</a>
            <a href="/terms" className="hover:text-emerald-700">Terms</a>
            <a href="/contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}