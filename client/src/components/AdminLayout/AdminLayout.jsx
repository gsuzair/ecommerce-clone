import { useState } from "react";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";
import AdminFooter from "./Footer";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader onToggleSidebar={() => setSidebarOpen(v => !v)} />
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:grid md:grid-cols-[16rem_1fr] md:gap-6">
          {/* Sidebar */}
          <AdminSidebar open={sidebarOpen} />
          {/* Main */}
          <main className="pt-4 md:pt-6 pb-8">
            {children}
          </main>
        </div>
      </div>
      <AdminFooter />
      {/* click overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
