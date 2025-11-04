import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ChatSandbox from "./components/ChatSandbox";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChatSandbox />
      </main>
      <footer className="mt-auto py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600">
          Built for learning and positive impact. Please use AI responsibly.
        </div>
      </footer>
    </div>
  );
}

export default App;
