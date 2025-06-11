import React from 'react';
import Header from '@/components/Header';

export default function Stack() {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0">
      <Header />
      <article className="space-y-6 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Tech Stack</h1>
        <section className="space-y-5">
          <p>
            My stack is optimized for building scalable, type-safe, high-performance applications. It's designed with developer speed, long-term maintainability, and reliability in mind.
          </p>

          {/* Framework */}
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Framework: Next.js + React</h2>
            <p className="mb-2">
              I use <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline">Next.js 14</a> with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="underline">React</a> to build full-stack applications. Its hybrid rendering and App Router fit perfectly into my TypeScript-first workflow.
            </p>
            <p className="mb-2">
              TypeScript is non-negotiable — strict types are enforced across the stack to prevent runtime bugs.
            </p>
            <p className="mb-1">I combine the following for data handling:</p>
            <ul className="list-disc list-inside mb-3 space-y-0.5">
              <li><a href="https://react.dev/learn/react-server-components" target="_blank" rel="noopener noreferrer" className="underline">React Server Components</a> for optimized hydration</li>
              <li><a href="https://trpc.io" target="_blank" rel="noopener noreferrer" className="underline">tRPC</a> / <a href="https://tanstack.com/query/latest" target="_blank" rel="noopener noreferrer" className="underline">TanStack Query</a> for type-safe data fetching</li>
              <li><a href="https://nextjs.org/docs/app/building-your-application/routing/server-actions" target="_blank" rel="noopener noreferrer" className="underline">Server Actions</a> with <a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="underline">Zod</a> for validation</li>
            </ul>
          </section>

          {/* Styling */}
          <section>
            <h2 className="text-xl font-semibold mb-2">2. Styling: Tailwind CSS + shadcn/ui</h2>
            <p className="mb-2">
              I rely on <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline">Tailwind CSS</a> for fast, responsive UI development using utility-first principles.
            </p>
            <p>
              For accessible, headless components, I use <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="underline">shadcn/ui</a> built on <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="underline">Radix UI</a>.
            </p>
          </section>

          {/* Database */}
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Database: PostgreSQL + Drizzle</h2>
            <p className="mb-2">
              My database layer uses <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className="underline">PostgreSQL</a> with <a href="https://orm.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle ORM</a> for fully typed, SQL-first development.
            </p>
            <p>
              I manage schemas with <a href="https://studio.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle Studio</a> and generate migrations using <a href="https://kit.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle Kit</a>.
            </p>
          </section>

          {/* API + Backend */}
          <section>
            <h2 className="text-xl font-semibold mb-2">4. API & Backend: tRPC + Edge Functions</h2>
            <p className="mb-2">
              I use <a href="https://trpc.io" target="_blank" rel="noopener noreferrer" className="underline">tRPC</a> for end-to-end type safety in API communication.
            </p>
            <p>
              For deployment, I target <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">Vercel</a> or <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer" className="underline">Cloudflare Workers</a> using Edge Functions depending on performance requirements.
            </p>
          </section>

          {/* Tooling */}
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Tooling & Dev Experience</h2>
            <p className="mb-2">Inspired by modern teams like Cal.com, I use:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li><a href="https://bun.sh" target="_blank" rel="noopener noreferrer" className="underline">Bun</a> or <a href="https://turbo.build/pack" target="_blank" rel="noopener noreferrer" className="underline">Turbopack</a> for fast builds</li>
              <li><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="underline">Vite</a> for lightning-fast local development</li>
              <li><a href="https://prettier.io" target="_blank" rel="noopener noreferrer" className="underline">Prettier</a> + <a href="https://eslint.org" target="_blank" rel="noopener noreferrer" className="underline">ESLint</a> for consistent formatting</li>
              <li><a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="underline">Zod</a> for runtime schema validation</li>
              <li><a href="https://pnpm.io" target="_blank" rel="noopener noreferrer" className="underline">PNPM</a> or <a href="https://yarnpkg.com" target="_blank" rel="noopener noreferrer" className="underline">Yarn</a> for package management</li>
              <li><a href="https://turbo.build/repo" target="_blank" rel="noopener noreferrer" className="underline">Turborepo</a> for monorepo orchestration</li>
            </ul>
          </section>

          {/* AI */}
          <section>
            <h2 className="text-xl font-semibold mb-2">6. AI-Driven Development</h2>
            <p>
              Tools like <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="underline">v0.dev</a> and <a href="https://cursor.so" target="_blank" rel="noopener noreferrer" className="underline">Cursor</a> accelerate design and implementation. I always apply human review to ensure production quality.
            </p>
          </section>

          {/* Habits */}
          <section>
            <h2 className="text-xl font-semibold mb-2">7. My Coding Principles</h2>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Use <code>let</code> sparingly for mutability</li>
              <li>Favor cohesive files over excessive component splitting</li>
              <li>Start with duplication; abstract only when needed</li>
              <li>Keep business logic close to UI for maintainability</li>
            </ul>
          </section>
        </section>
      </article>
    </div>
  );
}
