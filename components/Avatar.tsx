"use client";

import Image from "next/image";
import { useState } from "react";

export default function Avatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-36 h-36 md:w-44 md:h-44">
      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg ring-4 ring-white ring-offset-2 flex items-center justify-center">
        {!imageError ? (
          <Image
            src="/assets/avatar.png"
            alt="Avatar"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          /* Placeholder when image is not available */
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-32 h-32 text-white/80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
