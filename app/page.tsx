export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track which tabs are{" "}
          <span className="text-[#58a6ff]">killing your RAM</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TabRAM monitors every open tab in real time, alerts you when memory spikes, and tells you exactly which tab to close — so your browser stays fast.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get TabRAM — $3/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Works on Chrome &amp; Edge.</p>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-3 gap-4 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          {[
            ["Real-time", "Memory tracking"],
            ["Instant", "Kill suggestions"],
            ["Zero", "Performance impact"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-[#58a6ff] font-bold text-xl">{val}</p>
              <p className="text-[#8b949e] text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$3</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Background memory monitoring",
              "Smart kill suggestions",
              "Configurable alert thresholds",
              "Tab memory history (7 days)",
              "Works on Chrome &amp; Edge",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start for $3/mo
          </a>
          <p className="mt-3 text-xs text-[#484f58]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does TabRAM monitor memory?",
              "TabRAM uses a Chrome background service worker with the chrome.processes API to poll each tab's memory footprint every few seconds — with negligible CPU overhead.",
            ],
            [
              "What counts as a memory-heavy tab?",
              "By default, any tab using over 300 MB triggers an alert. You can adjust this threshold in the extension popup to match your machine's RAM.",
            ],
            [
              "Can I try it before subscribing?",
              "Yes — install the extension free for 3 days. After the trial, a $3/mo subscription unlocks continuous monitoring and history.",
            ],
          ].map(([q, a]) => (
            <details
              key={q as string}
              className="border border-[#21262d] rounded-lg bg-[#161b22] p-5 group"
            >
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg ml-4 group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="mt-3 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} TabRAM. All rights reserved.
      </footer>
    </main>
  );
}
