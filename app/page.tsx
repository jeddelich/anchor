export default function Home() {
  const swatches = [
    { label: "Primary", bg: "bg-primary", hex: "#4A90E2" },
    { label: "Secondary", bg: "bg-secondary", hex: "#7FB3F5" },
    { label: "Accent", bg: "bg-accent", hex: "#A7C7E7" },
    { label: "Highlight", bg: "bg-highlight", hex: "#C2A878" },
    { label: "Highlight Soft", bg: "bg-highlight-soft", hex: "#F4EBDD" },
    { label: "Highlight Hover", bg: "bg-highlight-hover", hex: "#D6BE91" },
    { label: "Background", bg: "bg-background", hex: "#F5F9FF" },
    { label: "Surface", bg: "bg-surface", hex: "#FFFFFF" },
    { label: "Text", bg: "bg-text", hex: "#1F2A44" },
  ];

  return (
    <div className="min-h-screen bg-background text-text font-sans px-10 py-14">
      <h1 className="text-3xl font-bold mb-2 text-primary">Anchor — Color Theme</h1>
      <p className="mb-10 text-text/70">A preview of the current color scheme.</p>

      {/* Swatches */}
      <section className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-4 text-text/50">Swatches</h2>
        <div className="flex flex-wrap gap-4">
          {swatches.map(({ label, bg, hex }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`${bg} w-20 h-20 rounded-xl border border-black/10`} />
              <span className="text-sm font-medium">{label}</span>
              <span className="text-xs text-text/50">{hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-14 bg-surface rounded-2xl p-8 border border-black/5 shadow-sm">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-6 text-text/50">Typography on Surface</h2>
        <h1 className="text-4xl font-bold mb-2">Heading One</h1>
        <h2 className="text-2xl font-semibold mb-2">Heading Two</h2>
        <p className="text-base text-text/80 mb-4">
          Body text sitting on the surface color. The quick brown fox jumps over the lazy dog.
        </p>
        <p className="text-sm text-text/50">Small / muted text for captions and labels.</p>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-4 text-text/50">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 rounded-full bg-primary text-white font-medium hover:opacity-90 transition-opacity">
            Primary
          </button>
          <button className="px-5 py-2.5 rounded-full bg-secondary text-text font-medium hover:opacity-90 transition-opacity">
            Secondary
          </button>
          <button className="px-5 py-2.5 rounded-full bg-accent text-text font-medium hover:opacity-90 transition-opacity">
            Accent
          </button>
          <button className="px-5 py-2.5 rounded-full bg-highlight text-white font-medium hover:bg-highlight-hover transition-colors">
            Highlight
          </button>
          <button className="px-5 py-2.5 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
            Outlined
          </button>
        </div>
      </section>
    </div>
  );
}
