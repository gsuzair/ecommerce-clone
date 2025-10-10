import { useState } from "react";

export default function AdminHeader({ onToggleSidebar }) {
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-14 border-b bg-white/80 backdrop-blur">
      <div className="h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden inline-flex items-center rounded-lg border px-2 py-1.5"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          <span className="font-semibold">Admin</span>
          <span className="ml-2 text-xs text-gray-500">Dashboard</span>
        </div>

        <div className="flex items-center gap-3">
          <input
            className="hidden md:block h-9 w-64 rounded-lg border px-3 text-sm"
            placeholder="Search…"
          />
          <button
            className="rounded-full w-9 h-9 border"
            onClick={() => setMenu(v => !v)}
            aria-label="User menu"
          />
        </div>
      </div>
    </header>
  );
}
