import React from "react";

export const SafariMockup = ({ children, url = "scaleerp.com" }: { children: React.ReactNode; url?: string }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200 bg-white transform transition-transform duration-500 hover:scale-[1.01]">
      {/* Safari Top Bar */}
      <div className="flex items-center px-4 py-3 bg-[#f6f6f6] border-b border-gray-200">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-6 py-1 text-xs font-medium text-gray-500 bg-white rounded-md shadow-sm border border-gray-200 flex items-center gap-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
            {url}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
};
