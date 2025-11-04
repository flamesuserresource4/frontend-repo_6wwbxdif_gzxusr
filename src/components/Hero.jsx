import { Lock, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-blue-100" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium">
            <Shield className="h-4 w-4" />
            Ethics-first AI
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Build helpful assistants — the safe, responsible way
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            This interactive demo shows how to design AI experiences that prioritize safety,
            transparency, and useful outcomes. No hacking tools. No malware. Just good tech for good people.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700">
              Try the Safe Chat Demo
            </a>
            <a href="#ethics" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-4 py-2 font-medium ring-1 ring-gray-200 hover:bg-gray-50">
              Learn the Guidelines
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <div className="flex items-center gap-3 text-gray-700">
              <Lock className="h-5 w-5 text-indigo-600" />
              <span className="font-medium">Safety by design</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>• Filters that reject harmful or illegal requests</li>
              <li>• Clear, helpful alternatives when something is blocked</li>
              <li>• Positive, educational content that empowers users</li>
            </ul>
            <div className="mt-6 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 p-4 text-sm text-gray-700">
              Tip: Ask about secure coding practices, threat modeling, or how to build an ethical AI.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
