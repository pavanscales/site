import React from 'react';
import Header from '@/components/Header';

const Stack: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0 space-y-6 text-base leading-relaxed"
      style={{ fontFamily: `'JetBrains Mono', monospace` }}
    >
      <Header />

      <h1 className="text-3xl font-bold mt-6">My Stack</h1>

      <p>
        This is the stack I’ve iterated on over time — built for speed, type safety, DX, and long-term maintainability.
        Every tool here is chosen with intention to ship fast and scale confidently.
      </p>

      {/* Framework */}
      <section>
        <p className="font-medium">1. Framework (Next.js + React):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            <a href="https://nextjs.org" className="underline" target="_blank" rel="noreferrer">Next.js 14</a> — edge-first fullstack framework, using App Router + RSC for server-first rendering and routing.
          </li>
          <li>
            React 19 enables features like <code>use</code> for async and <code>useActionState</code> for better form UX.
          </li>
          <li>
            I embrace <strong>Server Components</strong> as the default data-fetching layer. It helps avoid hydration cost and reduces bundle size.
          </li>
          <li>
            <strong>Validation:</strong> I use <a href="https://zod.dev" className="underline" target="_blank" rel="noreferrer">Zod</a> inside Server Actions, keeping logic co-located and fully typed.
          </li>
          <li>
            <a href="https://trpc.io" className="underline" target="_blank" rel="noreferrer">tRPC</a> powers client-server contracts with zero API schema maintenance — ideal for fast-moving teams.
          </li>
        </ul>
      </section>

      {/* Styling */}
      <section>
        <p className="font-medium">2. Styling (Tailwind CSS + shadcn/ui):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            <a href="https://tailwindcss.com" className="underline" target="_blank" rel="noreferrer">Tailwind CSS</a> — utility-first and scales well with AI pair programming (great for Copilot / v0.dev).
          </li>
          <li>
            I use <a href="https://ui.shadcn.com" className="underline" target="_blank" rel="noreferrer">shadcn/ui</a> — gives me composable building blocks on top of <a href="https://www.radix-ui.com" className="underline" target="_blank" rel="noreferrer">Radix UI</a>, without sacrificing accessibility.
          </li>
          <li>Everything is theme-ready, dark-mode enabled, and mobile-first.</li>
        </ul>
      </section>

      {/* Database */}
      <section>
        <p className="font-medium">3. Database (PostgreSQL + Drizzle):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>PostgreSQL — rock-solid SQL with support for JSON, indexing, and concurrency.</li>
          <li>
            <a href="https://orm.drizzle.team" className="underline" target="_blank" rel="noreferrer">Drizzle ORM</a> — typed schema-as-code. No magic, just inference + compile-time safety.
          </li>
          <li>
            <a href="https://kit.drizzle.team" className="underline" target="_blank" rel="noreferrer">Drizzle Kit</a> — generates schema, migrations, types — 1:1 mapping with the database.
          </li>
          <li>All DB access is scoped, typed, and testable via thin wrappers in tRPC routes.</li>
        </ul>
      </section>

      {/* Backend */}
      <section>
        <p className="font-medium">4. API & Backend (tRPC + Edge):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            tRPC — removes the friction of OpenAPI/GraphQL when working with TypeScript-only teams.
          </li>
          <li>Running on <a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">Vercel</a> and <a href="https://cloudflare.com" className="underline" target="_blank" rel="noreferrer">Cloudflare</a> Edge for sub-50ms cold starts.</li>
        </ul>
      </section>

      {/* Tooling */}
      <section>
        <p className="font-medium">5. Tooling & Infra (DX-oriented):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://bun.sh" className="underline" target="_blank" rel="noreferrer">Bun</a> — blazingly fast test runner + package manager + bundler.</li>
          <li><a href="https://turbo.build/repo" className="underline" target="_blank" rel="noreferrer">Turborepo</a> — monorepo infra with intelligent caching and pipelines.</li>
          <li><a href="https://prettier.io" className="underline" target="_blank" rel="noreferrer">Prettier</a> + <a href="https://eslint.org" className="underline" target="_blank" rel="noreferrer">ESLint</a> — consistency and quality gates across teams.</li>
          <li><a href="https://vitejs.dev" className="underline" target="_blank" rel="noreferrer">Vite</a> — ideal for isolated demos and small tools I build on the side.</li>
        </ul>
      </section>

      {/* AI */}
      <section>
        <p className="font-medium">6. AI Tools (Velocity Boosters):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://v0.dev" className="underline" target="_blank" rel="noreferrer">v0.dev</a> — AI-generated UIs → Tailwind-ready → clean handoff.</li>
          <li><a href="https://cursor.so" className="underline" target="_blank" rel="noreferrer">Cursor</a> + GitHub Copilot — best for code navigation + scaffolding.</li>
        </ul>
      </section>

      {/* Testing */}
      <section>
        <p className="font-medium">7. Testing Strategy:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://playwright.dev" className="underline" target="_blank" rel="noreferrer">Playwright</a> — reliable end-to-end browser testing.</li>
          <li><a href="https://jestjs.io" className="underline" target="_blank" rel="noreferrer">Jest</a> — unit testing + test-driven API logic.</li>
        </ul>
      </section>

      {/* CI/CD */}
      <section>
        <p className="font-medium">8. CI/CD:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Deploys via <a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">Vercel</a> — instant rollbacks and preview deployments.</li>
          <li><a href="https://github.com/features/actions" className="underline" target="_blank" rel="noreferrer">GitHub Actions</a> handle lint, type checks, tests, and deploy triggers.</li>
        </ul>
      </section>

      {/* Platforms */}
      <section>
        <p className="font-medium">9. Platforms:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Next.js (web-first)</li>
          <li><a href="https://expo.dev" className="underline" target="_blank" rel="noreferrer">Expo</a> + React Native (mobile)</li>
          <li>File conventions like <code>.web.tsx</code> / <code>.native.tsx</code> for cross-platform logic.</li>
        </ul>
      </section>

      {/* Coding Habits */}
      <section>
        <p className="font-medium">10. Coding Philosophy:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>State: <code>let</code> over <code>const</code> — prepare for future transitions.</li>
          <li>Don’t over-abstract — repeat first, abstract later.</li>
          <li>Keep business logic colocated with components when possible.</li>
          <li>Optimize for team readability, not cleverness.</li>
        </ul>
      </section>

      <footer className="pt-10 pb-20 text-center text-sm text-neutral-400">
        Built by <a href="https://github.com/pavanscales" target="_blank" rel="noreferrer" className="underline">pavanscales</a> — always exploring new frontiers ⚡
      </footer>
    </div>
  );
};

export default Stack;
