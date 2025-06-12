import React from 'react';
import Header from '@/components/Header';

const Stack: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0 font-sans space-y-6 text-base leading-relaxed">
      <Header />

      <h1 className="text-3xl font-bold mt-6">My Stack</h1>

      <p>
        Here’s my carefully curated TypeScript stack — optimized for speed, reliability, and maintainability.
        It helps me build scalable, type-safe applications quickly and confidently.
      </p>

      <section>
        <p className="font-medium">1. Framework (Next.js + React):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            I use <a href="https://nextjs.org" className="underline" target="_blank" rel="noreferrer">Next.js 14</a> with <a href="https://reactjs.org" className="underline" target="_blank" rel="noreferrer">React</a> — full-stack with App Router, RSC, and layouts.
          </li>
          <li>
            TypeScript (strict mode) ensures end-to-end type safety.
          </li>
          <li>
            For data fetching, I primarily use Server Components. Sometimes I fall back to SWR when working with legacy client fetches.
          </li>
          <li>
            <strong>Forms & Data:</strong> I use React 19 features like Server Actions + useActionState, and wire them with <a href="https://zod.dev" className="underline" target="_blank" rel="noreferrer">Zod</a> validation inside actions. Occasionally, I integrate backend logic via <a href="https://trpc.io" className="underline" target="_blank" rel="noreferrer">tRPC</a>.
          </li>
        </ul>
      </section>

      <section>
        <p className="font-medium">2. Styling (Tailwind CSS + shadcn/ui):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://tailwindcss.com" className="underline" target="_blank" rel="noreferrer">Tailwind CSS</a> — utility-first, responsive, dark-mode ready, colocated with markup for AI-based DX.</li>
          <li>
            Components are built with <a href="https://ui.shadcn.com" className="underline" target="_blank" rel="noreferrer">shadcn/ui</a> and <a href="https://www.radix-ui.com" className="underline" target="_blank" rel="noreferrer">Radix UI</a> — accessible and unstyled by default.
          </li>
        </ul>
      </section>

      <section>
        <p className="font-medium">3. Database (PostgreSQL + Drizzle):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://www.postgresql.org" className="underline" target="_blank" rel="noreferrer">PostgreSQL</a> — fast, open-source relational DB.</li>
          <li><a href="https://orm.drizzle.team" className="underline" target="_blank" rel="noreferrer">Drizzle ORM</a> — fully typed, lightweight, ESM-first.</li>
          <li><a href="https://kit.drizzle.team" className="underline" target="_blank" rel="noreferrer">Drizzle Kit</a> auto-generates schema + migrations — wired into my tRPC routes.</li>
          <li>Drizzle Studio makes DB browsing and updates seamless.</li>
        </ul>
      </section>

      <section>
        <p className="font-medium">4. API & Backend (tRPC + Edge Functions):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://trpc.io" className="underline" target="_blank" rel="noreferrer">tRPC</a> — type-safe API calls, zero boilerplate.</li>
          <li>
            Hosted on <a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">Vercel</a> or <a href="https://cloudflare.com" className="underline" target="_blank" rel="noreferrer">Cloudflare</a> Edge — minimal latency.
          </li>
        </ul>
      </section>

      <section>
        <p className="font-medium">5. Tooling (Inspired by Cal.com):</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://bun.sh" className="underline" target="_blank" rel="noreferrer">Bun</a> + <a href="https://turbo.build/pack" className="underline" target="_blank" rel="noreferrer">Turbopack</a> — ultra-fast builds</li>
          <li><a href="https://vitejs.dev" className="underline" target="_blank" rel="noreferrer">Vite</a> — fast DX for small projects</li>
          <li><a href="https://prettier.io" className="underline" target="_blank" rel="noreferrer">Prettier</a> + <a href="https://eslint.org" className="underline" target="_blank" rel="noreferrer">ESLint</a> for code consistency</li>
          <li><a href="https://pnpm.io" className="underline" target="_blank" rel="noreferrer">PNPM</a> / <a href="https://yarnpkg.com" className="underline" target="_blank" rel="noreferrer">Yarn</a> — fast installs</li>
          <li><a href="https://turbo.build/repo" className="underline" target="_blank" rel="noreferrer">Turborepo</a> — monorepos with caching and pipelines</li>
        </ul>
      </section>

      <section>
        <p className="font-medium">6. AI & Speed:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://v0.dev" className="underline" target="_blank" rel="noreferrer">v0.dev</a> — AI-generated UIs</li>
          <li><a href="https://cursor.so" className="underline" target="_blank" rel="noreferrer">Cursor</a> + GitHub Copilot — boost DX, reduce friction</li>
        </ul>
      </section>

      <section>
        <p className="font-medium">7. Testing Strategy:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><a href="https://playwright.dev" className="underline" target="_blank" rel="noreferrer">Playwright</a> — end-to-end tests</li>
          <li><a href="https://jestjs.io" className="underline" target="_blank" rel="noreferrer">Jest</a> — unit & integration testing</li>
        </ul>
      </section>

      <section>
        <p className="font-medium">8. CI/CD & DevOps:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Deployments via <a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">Vercel</a></li>
          <li><a href="https://github.com/features/actions" className="underline" target="_blank" rel="noreferrer">GitHub Actions</a> run tests, checks, and CI tasks</li>
        </ul>
      </section>

      <section>
        <p className="font-medium">9. Platforms:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Web-first (Next.js)</li>
          <li>Mobile via <a href="https://expo.dev" className="underline" target="_blank" rel="noreferrer">Expo</a> + <a href="https://reactnative.dev" className="underline" target="_blank" rel="noreferrer">React Native</a></li>
          <li>Cross-platform pattern: `.web.tsx` / `.native.tsx`</li>
        </ul>
      </section>

      <section>
        <p className="font-medium">10. Coding Habits:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Use `let` for flexibility + future state updates</li>
          <li>Prefer clarity over cleverness — readable code wins</li>
          <li>Copy-paste early, abstract once patterns emerge</li>
          <li>Keep logic close to UI for better developer ergonomics</li>
        </ul>
      </section>

      <footer className="pt-10 pb-20 text-center text-sm text-neutral-400">
        Built by <a href="https://github.com/pavanscales" target="_blank" rel="noreferrer" className="underline">pavanscales</a> — open to collab 🤝
      </footer>
    </div>
  );
};

export default Stack;
