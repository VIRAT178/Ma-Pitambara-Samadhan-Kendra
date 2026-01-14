export default function InfoBanner() {
  return (
    <section className="bg-white dark:bg-gray-900 py-6 border-b border-black/10 dark:border-white/10 transition-colors">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-3 text-center text-sm">
          <div>
            <p className="font-semibold text-[color:var(--brand)] dark:text-[color:var(--accent)]">TOP 5 FAMOUS ASTROLOGERS IN INDORE (INDIA)</p>
            <p className="text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] text-xs mt-1">ASTROLOG.COM | RANK 200</p>
          </div>
          <div className="border-l border-r border-black/10 dark:border-white/10">
            <p className="font-semibold text-[color:var(--brand)] dark:text-[color:var(--accent)]">BEST INDIAN ASTROLOGERS</p>
            <p className="text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] text-xs mt-1">IN INDORE (INDIA)</p>
          </div>
          <div>
            <p className="text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] text-xs">
              "Pandit Shubham Sharma is a renowned Indian astrologer in India."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
