import React from "react";

type Project = {
  title: string;
  desc: string;
  url: string;
  label: string;
};

const projects: Project[] = [
  {
    title: "no fluff",
    desc: "Platform connecting developers with real-world, high-leverage problems.",
    url: "https://nofluff.vercel.app",
    label: "site",
  },
  {
    title: "jpeg encoder",
    desc: "Ultra-fast JPEG encoder built in pure JavaScript.",
    url: "https://github.com/pavanscales/jpeg.encoder",
    label: "code",
  },
  {
    title: "alumni.meet",
    desc: "SIH Hackathon winner. Bridges alumni and freshers through smart matchmaking.",
    url: "https://github.com/pavanscales/random",
    label: "code",
  },
];

const beliefs: string[] = [
  "Government feels encryption is illegal.",
  "Speed beats perfection. Shipping fast creates momentum.",
  "Progress over plans. Culture should reward output.",
  "Small teams move quicker and think sharper.",
  "AI-native teams will dominate. The delta is compounding.",
  "Adoption > Announcement. Landings matter more than launches.",
  "The loop: listen → build → ship → talk to users → repeat.",
  "No limits. You define the ceiling — not your title.",
  "Consistency > raw talent. Reps win.",
  "Mastery requires hours. There’s no shortcut.",
  "Improve 1% daily. Compounding is real.",
  "Truth is growth. Be bold, but be open to change.",
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
    <p className="mb-4">
      Full-stack engineer & low-level systems hacker. I architect performant infra, custom runtimes, and internal dev tools. Focused on clean abstractions, extreme efficiency, and zero noise.
    </p>

    <p className="mb-4">
      Power tools: Vim, Unix philosophy, low-level APIs. I don’t just build UIs — I ship resilient systems.
    </p>

    <p className="mb-8">
      Hacker @{" "}
      <a
        href="https://cal.com"
        className="text-blue-400 hover:underline transition"
        target="_blank"
        rel="noreferrer"
      >
        cal.com
      </a>
      . Currently engineering lean React server framework, RPC layer, and edge-native infra.
    </p>

    <section className="mb-8">
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
      shipping &gt; talking. always building.
    </p>
  </div>
);

export default Home;
