import { Shield, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-indigo-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">Secure AI Studio</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#demo" className="hover:text-gray-900">Live Demo</a>
          <a href="#ethics" className="hover:text-gray-900">Ethics</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-black">
          <Sparkles className="h-4 w-4" />
          Start Learning
        </button>
      </div>
    </header>
  );
}
