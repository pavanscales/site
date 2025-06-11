import React from 'react';
import Header from '@/components/Header';

export default function Stack() {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0">
      <Header />
      <article className="space-y-6 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">My Stack</h1>
        <section className="space-y-5">
          <p>
            This is my carefully crafted TypeScript stack — built for speed, reliability, and maintainability.
            It empowers me to deliver scalable, type-safe applications with confidence.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Framework (Next.js + React)</h2>
            <p className="mb-2">
              I leverage <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline">Next.js 14</a> and <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="underline">React</a> to build full-stack applications with top-tier performance. Next.js’s hybrid rendering model fits perfectly with my TypeScript-first approach.
            </p>
            <p className="mb-2">
              TypeScript is non-negotiable — I use strict typing across both client and server to prevent runtime bugs and boost confidence in code.
            </p>
            <p className="mb-1">For forms and data handling, I use:</p>
            <ul className="list-disc list-inside mb-3 space-y-0.5">
              <li><a href="https://react.dev/learn/react-server-components" target="_blank" rel="noopener noreferrer" className="underline">React Server Components</a> for optimized rendering</li>
              <li><a href="https://trpc.io" target="_blank" rel="noopener noreferrer" className="underline">tRPC</a> or <a href="https://tanstack.com/query/latest" target="_blank" rel="noopener noreferrer" className="underline">TanStack Query</a> for end-to-end type-safe data fetching</li>
              <li><a href="https://nextjs.org/docs/app/building-your-application/routing/server-actions" target="_blank" rel="noopener noreferrer" className="underline">Server Actions</a> with <a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="underline">Zod</a> for schema validation and enforcement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Styling (Tailwind CSS + shadcn/ui)</h2>
            <p className="mb-2">
              I use <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline">Tailwind CSS</a> for utility-first styling that keeps UI consistent, responsive, and scalable.
            </p>
            <p>
              For accessible components and design flexibility, I build with <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="underline">shadcn/ui</a>, powered by <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="underline">Radix UI</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Database (PostgreSQL + Drizzle)</h2>
            <p className="mb-2">
              I rely on <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className="underline">PostgreSQL</a> for reliable relational storage. With <a href="https://orm.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle ORM</a>, I write fully typed queries that combine SQL expressiveness with TypeScript safety.
            </p>
            <p>
              Migrations and schema changes are seamless using <a href="https://studio.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle Studio</a> and <a href="https://kit.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle Kit</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. API & Backend (tRPC + Edge Functions)</h2>
            <p className="mb-2">
              My backend architecture uses <a href="https://trpc.io" target="_blank" rel="noopener noreferrer" className="underline">tRPC</a> to enable end-to-end type safety and avoid boilerplate APIs.
            </p>
            <p>
              I deploy using <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">Vercel</a> or <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer" className="underline">Cloudflare</a> Edge Functions, depending on scale and latency requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Tooling (Inspired by Cal.com)</h2>
            <p className="mb-2">My development workflow is fast and optimized with:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li><a href="https://bun.sh" target="_blank" rel="noopener noreferrer" className="underline">Bun</a> or <a href="https://turbo.build/pack" target="_blank" rel="noopener noreferrer" className="underline">Turbopack</a> for blazing-fast builds</li>
              <li><a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="underline">Zod</a> for schema validation at runtime</li>
              <li><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="underline">Vite</a> for ultra-fast frontend builds in non-Next.js apps</li>
              <li><a href="https://prettier.io" target="_blank" rel="noopener noreferrer" className="underline">Prettier</a> + <a href="https://eslint.org" target="_blank" rel="noopener noreferrer" className="underline">ESLint</a> for code consistency</li>
              <li><a href="https://pnpm.io" target="_blank" rel="noopener noreferrer" className="underline">PNPM</a> or <a href="https://yarnpkg.com" target="_blank" rel="noopener noreferrer" className="underline">Yarn</a> for efficient dependency management</li>
              <li><a href="https://turbo.build/repo" target="_blank" rel="noopener noreferrer" className="underline">Turborepo</a> to manage monorepos at scale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. AI & Speed</h2>
            <p>
              I supercharge development with AI tools like <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="underline">v0.dev</a> and <a href="https://cursor.so" target="_blank" rel="noopener noreferrer" className="underline">Cursor</a>, always applying human judgment to review and refine output.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. My Coding Habits</h2>
            <ul className="list-disc list-inside space-y-0.5">
              <li>I prefer <code>let</code> for flexibility where needed</li>
              <li>I write larger, cohesive files instead of micro-components</li>
              <li>Copy/paste is okay early on — I delay abstraction until patterns are clear</li>
              <li>I keep logic close to the UI for clarity and maintainability</li>
            </ul>
          </section>
        </section>
      </article>
       <footer className="pt-10 pb-20 text-center text-sm text-neutral-400">
        Built by <a href="https://github.com/pavanscales" target="_blank" rel="noopener noreferrer" className="underline">pavanscales</a> — open to collab 🤝
      </footer>
    </div>
  );
}
