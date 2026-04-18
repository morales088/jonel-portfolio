"use client";

import Image from "next/image";
import { useState } from "react";

export default function Avatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-emerald-400 p-[3px] shadow-xl shadow-indigo-200">
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
          {!imageError ? (
            <Image
              src="/assets/avatar.png"
              alt="John Neil Morales"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>
      </div>
      {/* Online dot */}
      <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full shadow-sm" />
    </div>
  );
}
