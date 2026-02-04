interface MessageBubbleProps {
  type: "question" | "answer";
  content: React.ReactNode;
  isText?: boolean;
}

export default function MessageBubble({ type, content, isText = false }: MessageBubbleProps) {
  if (type === "question") {
    return (
      <div className="flex justify-end mb-4 animate-fadeIn">
        <div className="max-w-md px-6 py-3 bg-indigo-600 text-white rounded-3xl rounded-tr-md shadow-md">
          <p className="text-base">{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-6 animate-fadeIn">
      {isText ? (
        <div className="max-w-2xl px-6 py-4 bg-white border border-slate-200 rounded-3xl rounded-tl-md shadow-md">
          <p className="text-slate-700 text-base leading-relaxed">{content}</p>
        </div>
      ) : (
        <div className="w-full max-w-4xl">{content}</div>
      )}
    </div>
  );
}
