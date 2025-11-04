import { useState } from "react";
import { Send, ShieldAlert } from "lucide-react";

const blockedPatterns = [
  /malware|ransomware|worm|virus/i,
  /ddos|botnet|phishing|keylogger/i,
  /exploit|zero[- ]day|backdoor/i,
  /bypass.*security|crack.*password/i,
];

export default function ChatSandbox() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m your safe, helpful AI. Ask about secure coding, ethical AI design, or privacy best practices.",
    },
  ]);
  const [input, setInput] = useState("");
  const [blocked, setBlocked] = useState("");

  function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const isBlocked = blockedPatterns.some((re) => re.test(text));
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");

    if (isBlocked) {
      setBlocked(text);
      const alt =
        "I can't assist with harmful or illegal activities. Here are safe alternatives: ask about securing applications, incident response basics, or how to design ethical AI guardrails.";
      setMessages((m) => [...m, { role: "assistant", content: alt }]);
      return;
    }

    // Simple friendly echo with guidance
    const reply =
      "Thanks for the thoughtful question! While I can't run code here, I can share guidance, best practices, and resources to help you learn safely and responsibly.";
    setBlocked("");
    setMessages((m) => [...m, { role: "assistant", content: reply }]);
  }

  return (
    <section id="demo" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Safe Chat Demo</h3>
            {blocked && (
              <div className="inline-flex items-center gap-2 text-red-700 bg-red-50 px-3 py-1 rounded-md text-sm">
                <ShieldAlert className="h-4 w-4" />
                Harmful content filtered
              </div>
            )}
          </div>

          <div className="p-6 h-80 overflow-y-auto space-y-3 bg-gradient-to-b from-white to-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "assistant"
                    ? "max-w-[80%] rounded-lg bg-indigo-50 text-gray-900 p-3"
                    : "ml-auto max-w-[80%] rounded-lg bg-gray-900 text-white p-3"
                }
              >
                {m.content}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about secure coding, threat modeling, or privacy by design..."
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700"
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </form>
        </div>

        <div id="ethics" className="mt-8 text-sm text-gray-600">
          Use this demo to explore safety patterns: input filtering, refusal with helpful alternatives, and clear guidance. We never assist with wrongdoing.
        </div>
      </div>
    </section>
  );
}
