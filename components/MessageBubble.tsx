interface MessageBubbleProps {
  type: "question" | "answer";
  content: React.ReactNode;
  isText?: boolean;
}

export default function MessageBubble({ type, content, isText = false }: MessageBubbleProps) {
  if (type === "question") {
    return (
      <div className="flex justify-end mb-3 animate-fadeIn">
        <div className="max-w-sm px-5 py-3 bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl rounded-tr-sm shadow-md shadow-indigo-200/50">
          <p className="text-sm font-medium">{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-5 animate-fadeIn">
      <div className="flex items-start gap-3 w-full max-w-5xl">
        {/* Bot avatar */}
        {isText && (
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
          </div>
        )}
        {isText ? (
          <div className="flex-1 px-5 py-3.5 glass border border-slate-200/70 rounded-2xl rounded-tl-sm shadow-sm">
            <p className="text-slate-700 text-sm leading-relaxed">{content}</p>
          </div>
        ) : (
          <div className="w-full">{content}</div>
        )}
      </div>
    </div>
  );
}
