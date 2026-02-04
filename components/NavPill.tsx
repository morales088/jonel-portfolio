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
        px-7 py-3.5 rounded-2xl font-medium text-sm transition-all
        ${
          active
            ? "bg-slate-900 text-white shadow-md scale-105"
            : "bg-white text-slate-600 shadow-sm hover:shadow-md hover:bg-slate-50 hover:scale-[1.02]"
        }
      `}
    >
      <span className="flex flex-col items-center gap-2">
        {icon && <span className={active ? "text-white" : "text-slate-600"}>{icon}</span>}
        <span>{label}</span>
      </span>
    </button>
  );
}
