import React from 'react';

type Project = {
  title: string;
  desc: string;
  url: string;
  label: string;
};

const projects: Project[] = [
  {
    title: 'no fluff',
    desc: 'Platform connecting developers with real-world, high-leverage problems.',
    url: 'https://nofluff.vercel.app',
    label: '[site]',
  },
  {
    title: 'jpeg encoder',
    desc: 'Ultra-fast JPEG encoder built in pure JavaScript.',
    url: 'https://github.com/pavanscales/jpeg.encoder',
    label: '[code]',
  },
  {
    title: 'alumni.meet',
    desc: 'SIH Hackathon winner. Bridges alumni and freshers through smart matchmaking.',
    url: 'https://github.com/pavanscales/random',
    label: '[code]',
  },
];

const beliefs: string[] = [
  'Speed beats perfection. Shipping fast creates momentum.',
  'Progress over plans. Culture should reward output.',
  'Small teams move quicker and think sharper.',
  'AI-native teams will dominate. The delta is compounding.',
  'Adoption > Announcement. Landings matter more than launches.',
  'The loop: listen → build → ship → talk to users → repeat.',
  'No limits. You define the ceiling — not your title.',
  'Consistency > raw talent. Reps win.',
  'Mastery requires hours. There’s no shortcut.',
  'Improve 1% daily. Compounding is real.',
  'Truth is growth. Be bold, but be open to change.',
  'Write to think. Clear writing = clear thinking.',
  'Better writing = better dev. It’s a core skill.',
  'Leaders create clarity. Especially when things break.',
  'Feedback isn’t personal. Detach and grow.',
  'Show, don’t tell. Demos > docs.',
  'Prototype > debate. Build and test fast.',
  'Hire people smarter than you. Learn from them.',
  'Lead with empathy. Assume positive intent.',
  'Own your story — even the failures.',
];

const ProjectItem: React.FC<Project> = ({ title, desc, url, label }) => (
  <li className="text-white">
    <strong>{title}</strong> — {desc}{' '}
    <a
      href={url}
      className="ml-1 font-medium underline hover:text-gray-300 transition"
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  </li>
);

const Home: React.FC = () => (
  <div
    className="space-y-6 px-4 md:px-8 py-8 text-white"
    style={{ fontFamily: `'JetBrains Mono', monospace` }}
  >
    <p>
      Full-stack engineer & low-level systems hacker. I architect performant infra, custom runtimes, and internal dev tools. Focused on clean abstractions, extreme efficiency, and zero noise.
    </p>

    <p>
      Power tools: Vim, Unix philosophy, low-level APIs. I don’t just build UIs — I ship resilient systems.
    </p>

    <p>
      Hacker @{' '}
      <a
        href="https://cal.com"
        className="font-medium underline hover:text-gray-300 transition"
        target="_blank"
        rel="noreferrer"
      >
        cal.com
      </a>. Currently engineering a custom JS runtime, lean React server framework, RPC layer, and edge-native infra.
    </p>

    <section>
      <p className="font-medium text-white">Selected Projects:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ul>
    </section>

    <section>
      <p className="font-medium text-white">What I believe:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        {beliefs.map((belief, idx) => (
          <li key={idx} className="text-white">{belief}</li>
        ))}
      </ul>
    </section>

    <p className="text-sm text-gray-400">
      GitHub:{' '}
      <a
        href="https://github.com/pavanscales"
        className="font-medium underline hover:text-gray-300 transition"
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
