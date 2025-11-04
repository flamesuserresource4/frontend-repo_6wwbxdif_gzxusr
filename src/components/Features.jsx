import { ShieldCheck, BookOpen, Stars } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Built-in Safety",
      desc: "Proactive guardrails decline harmful requests and guide users toward constructive goals.",
    },
    {
      icon: BookOpen,
      title: "Education-first",
      desc: "Learning resources on ethical AI, secure coding, and responsible deployment.",
    },
    {
      icon: Stars,
      title: "Great UX",
      desc: "A clean, modern interface with delightful micro-interactions and accessibility in mind.",
    },
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why this demo?</h2>
        <p className="mt-2 text-gray-600">Explore how ethical AI patterns translate into practical, user-friendly designs.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-indigo-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
