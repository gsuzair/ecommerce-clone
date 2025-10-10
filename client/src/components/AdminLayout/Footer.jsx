export default function AdminFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto px-4 h-12 flex items-center justify-between text-xs text-gray-500">
        <span>© {new Date().getFullYear()} Your Company</span>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
