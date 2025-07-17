import React from "react";

type Project = {
  title: string;
  desc: string;
  url: string;
  label: string;
};

const projects: Project[] = [
  {
    title: "building blocks",
    desc: "Clean, modern components. Copy-paste into your apps. Works with all React frameworks. Open Source. Free forever.",
    url: "https://github.com/pavanscales/blocks",
    label: "code",
  },
  {
    title: "weekday",
    desc: "The Google Calendar alternative with AI features. Privacy-focused, client-first, and completely under your control.",
    url: "https://weekday.vercel.app",
    label: "site",
  },
  {
    title: "voidrsc",
    desc: "A full-stack framework from scratch, benchmarked faster than Next.js. Designed for edge-first modern apps.",
    url: "https://github.com/pavanscales/voidrsc",
    label: "code",
  },
  {
    title: "jpeg encoder",
    desc: "Ultra-fast JPEG encoder built in pure JavaScript.",
    url: "https://github.com/pavanscales/jpeg.encoder",
    label: "code",
  },
  {
    title: "alumni.meet",
    desc: "SIH Hackathon. Bridges alumni and freshers through smart matchmaking.",
    url: "https://github.com/pavanscales/random",
    label: "code",
  },
  {
    title: "no fluff",
    desc: "Platform connecting developers with real-world, high-leverage problems.",
    url: "https://nofluff.vercel.app",
    label: "site",
  },
];

const beliefs: string[] = [
  "Government feels encryption is illegal.",
  "Speed beats perfection. Shipping fast creates momentum.",
  "Progress over plans. Culture should reward output.",
  "Small teams move quicker and think sharper.",
  "AI-native teams will dominate. The delta is compounding.",
  "Adoption > announcement. Landings matter more than launches.",
  "The loop: listen → build → ship → talk to users → repeat.",
  "No limits. You define the ceiling, not your title.",
  "Consistency > raw talent. Reps win.",
  "Mastery requires hours. There’s no shortcut.",
  "Improve 1% daily. Compounding is real.",
  "Truth is growth. Be bold, be open to change.",
  "Write to think. Clear writing = clear thinking.",
  "Better writing = better dev. It’s a core skill.",
  "Leaders create clarity. Especially when things break.",
  "Feedback isn’t personal. Detach and grow.",
  "Show, don’t tell. Demos > docs.",
  "Prototype > debate. Build and test fast.",
  "Hire people smarter than you. Learn from them.",
  "Lead with empathy. Assume positive intent.",
  "Own your story — even the failures.",
  "Open source is leverage. You grow by giving first.",
  "Remote work isn’t a perk. It’s the new default for global builders.",
];

const ProjectItem: React.FC<Project> = ({ title, desc, url, label }) => (
  <li className="text-white">
    <strong>{title}</strong> — {desc}{" "}
    <a
      href={url}
      className="ml-2 text-xs px-2 py-0.5 rounded bg-blue-800 text-white hover:bg-blue-700 font-mono transition"
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  </li>
);

const Home: React.FC = () => (
  <div
    className="px-4 md:px-8 py-8 text-white max-w-screen-md ml-2"
    style={{ fontFamily: `'JetBrains Mono', monospace` }}
  >
    <p className="mb-4">Hey, I’m Pavan, 20yo frontend boy</p>
    <p className="mb-4">
      Currently: writing a React server component framework having bare-metal benchmarks —
      the way I love the web would be :)
    </p>
    <p className="mb-4">
      TL;DR — learnt by hacking on the internet. I care about deep science, game theory,
      quantum physics, AGI, and systems that actually matter. I go deep into history,
      politics, and strategy. I use Vim btw.
    </p>

    <p className="mb-4">
      I care about what <em>actually</em> makes the web great, and I love the web.
      I’m deeply interested in:
    </p>
    <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
      <li>Building compilers, VMs, and interpreters purpose-built for the web</li>
      <li>JIT internals, memory layout, and execution timing graphs</li>
      <li>AI-native tooling — not “AI in UI”, but embedded into the dev loop</li>
      <li>RPCs, SDKs, and CLIs that ship DX at scale (not just pretty wrappers)</li>
      <li>Understanding perf cliffs that real browsers hit — not synthetic benchmarks</li>
      <li>Rewriting bundlers, analyzers, and runtimes from scratch when necessary</li>
      <li>Optimizing for cold-start speed, execution order, and module flattening</li>
      <li>Reverse-engineering browser internals to track why the web feels slow</li>
      <li>Reducing TTI/TBT by rewriting infra, not just tweaking configs</li>
      <li>Profiling actual user paths, not just Lighthouse reports</li>
      <li>Zero-runtime DX — shipping less JavaScript without losing power</li>
      <li>Writing systems that don’t assume React — but deeply understand it</li>
      <li>Running wasm in workers, pushing execution to the edge, avoiding hydration traps</li>
      <li>Shipping React apps without client-side JS when possible</li>
      <li>Challenging abstractions that leak — especially in framework DX</li>
      <li>Making the devtools lie less and surface truth sooner</li>
    </ul>

    <p className="mb-4">
      Hacker at{" "}
      <a
        href="https://cal.com"
        className="text-blue-400 hover:underline transition"
        target="_blank"
        rel="noreferrer"
      >
        cal.com
      </a>
    </p>

    {/* ✅ Scroll target anchor for nav */}
    <section id="projects" className="mb-8 pt-10 scroll-mt-20">
      <p className="font-medium text-white mb-2">Selected Projects:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ul>
    </section>

    <section className="mb-8">
      <p className="font-medium text-white mb-2">What I believe:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        {beliefs.map((belief, idx) => (
          <li key={idx} className="text-white">
            {belief}
          </li>
        ))}
      </ul>
    </section>

    <p className="text-sm text-gray-400 mb-1">
      GitHub:{" "}
      <a
        href="https://github.com/pavanscales"
        className="hover:underline text-blue-400 transition"
        target="_blank"
        rel="noreferrer"
      >
        @pavanscales
      </a>
    </p>

    <p className="text-xs text-gray-500 italic">
      shipping &gt; talking. math &gt; magic. compilers &gt; configs.
    </p>
  </div>
);

export default Home;
