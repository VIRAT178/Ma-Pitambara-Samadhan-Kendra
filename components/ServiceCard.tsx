type Props = {
  title: string
  icon: string
  description?: string
  onClick?: () => void
}

export default function ServiceCard({ title, icon, description, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-[color:var(--cream)] px-4 py-5 text-left shadow-lg ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-[color:var(--brand)] dark:border-white/10 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-[color:var(--accent)]"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[color:var(--brand)] via-[color:var(--accent)] to-[#f8d68f] flex items-center justify-center text-3xl shadow-md dark:shadow-none">
        {icon}
      </div>
      <div className="flex flex-col items-center text-center gap-1">
        <h3 className="font-semibold text-[color:var(--ink)] dark:text-[color:var(--ink)] text-base md:text-lg">
          {title}
        </h3>
        {description ? (
          <p className="text-sm text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </button>
  )
}
