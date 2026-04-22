interface NavPillProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function NavPill({ label, icon, active, onClick }: NavPillProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative px-3 py-2.5 sm:px-5 sm:py-3 rounded-2xl font-medium text-sm transition-all duration-200
        flex flex-col items-center gap-1.5 min-w-[44px] sm:min-w-[72px]
        ${active
          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
          : "bg-white text-slate-500 shadow-sm border border-slate-200/80 hover:border-slate-300 hover:text-slate-700 hover:shadow-md hover:-translate-y-0.5"
        }
      `}
    >
      <span className={`transition-colors ${active ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}>
        {icon}
      </span>
      <span className="hidden sm:block text-xs font-semibold tracking-wide">{label}</span>
      {active && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full" />
      )}
    </button>
  );
}
