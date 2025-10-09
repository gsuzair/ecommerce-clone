import { NavLink } from "react-router-dom";

const item =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100";
const active =
  "bg-gray-100 text-gray-900";

export default function AdminSidebar({ open }) {
  return (
    <aside
      className={`fixed md:sticky inset-y-0 left-0 z-30 w-64 border-r bg-white p-3
      transition-transform md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      aria-label="Sidebar"
    >
      <nav className="space-y-1">
        <NavLink to="/admin" end className={({isActive}) => `${item} ${isActive ? active : "text-gray-600"}`}>Overview</NavLink>
        <NavLink to="/admin/product" className={({isActive}) => `${item} ${isActive ? active : "text-gray-600"}`}>Products</NavLink>
        <NavLink to="/admin/order" className={({isActive}) => `${item} ${isActive ? active : "text-gray-600"}`}>Orders</NavLink>
        <NavLink to="/admin/customer" className={({isActive}) => `${item} ${isActive ? active : "text-gray-600"}`}>Customers</NavLink>
        <NavLink to="/admin/setting" className={({isActive}) => `${item} ${isActive ? active : "text-gray-600"}`}>Settings</NavLink>
      </nav>
    </aside>
  );
}
