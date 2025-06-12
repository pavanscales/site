import React from 'react';
import Header from '@/components/Header';

const Stack: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-0 font-sans text-base leading-relaxed">
      <Header />

      <main className="max-w-2xl mx-auto mt-10 space-y-8">
        <h1 className="text-3xl font-bold">My Stack</h1>

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
            <li>TypeScript (strict mode) ensures end-to-end type safety.</li>
            <li>
              <strong>Forms & Data:</strong> Zod + tRPC for backend validation and routing.
            </li>
          </ul>
        </section>

        <section>
          <p className="font-medium">2. Styling (Tailwind CSS + shadcn/ui):</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><a href="https://tailwindcss.com" className="underline" target="_blank" rel="noreferrer">Tailwind CSS</a> — utility-first, responsive, dark-mode ready.</li>
            <li><a href="https://ui.shadcn.com" className="underline" target="_blank" rel="noreferrer">shadcn/ui</a> + <a href="https://www.radix-ui.com" className="underline" target="_blank" rel="noreferrer">Radix UI</a> — unstyled, accessible components.</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">3. Database (PostgreSQL + Drizzle):</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><a href="https://www.postgresql.org" className="underline" target="_blank" rel="noreferrer">PostgreSQL</a> — reliable and fast.</li>
            <li><a href="https://orm.drizzle.team" className="underline" target="_blank" rel="noreferrer">Drizzle ORM</a> — fully typed, lightweight.</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">4. API & Backend:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><a href="https://trpc.io" className="underline" target="_blank" rel="noreferrer">tRPC</a> — type-safe API calls, no schema mismatch.</li>
            <li><a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">Vercel</a> + <a href="https://cloudflare.com" className="underline" target="_blank" rel="noreferrer">Cloudflare</a> — edge-deployed APIs.</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">5. Tooling:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><a href="https://bun.sh" className="underline" target="_blank" rel="noreferrer">Bun</a> + <a href="https://turbo.build/pack" className="underline" target="_blank" rel="noreferrer">Turbopack</a> — lightning-fast dev.</li>
            <li><a href="https://vitejs.dev" className="underline" target="_blank" rel="noreferrer">Vite</a> — for smaller projects.</li>
            <li>Formatters: <a href="https://prettier.io" className="underline" target="_blank" rel="noreferrer">Prettier</a> + <a href="https://eslint.org" className="underline" target="_blank" rel="noreferrer">ESLint</a>.</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">6. AI Workflow:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><a href="https://v0.dev" className="underline" target="_blank" rel="noreferrer">v0.dev</a> — AI-generated UI</li>
            <li><a href="https://cursor.so" className="underline" target="_blank" rel="noreferrer">Cursor</a> + GitHub Copilot</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">7. Testing Strategy:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><a href="https://playwright.dev" className="underline" target="_blank" rel="noreferrer">Playwright</a> — E2E tests</li>
            <li><a href="https://jestjs.io" className="underline" target="_blank" rel="noreferrer">Jest</a> — unit/integration</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">8. CI/CD:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">Vercel</a> for instant deploys</li>
            <li><a href="https://github.com/features/actions" className="underline" target="_blank" rel="noreferrer">GitHub Actions</a> — runs tests, checks</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">9. Platforms:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Web-first (Next.js)</li>
            <li><a href="https://expo.dev" className="underline" target="_blank" rel="noreferrer">Expo</a> + React Native for mobile</li>
            <li>Cross-platform: `.web.tsx` / `.native.tsx`</li>
          </ul>
        </section>

        <section>
          <p className="font-medium">10. Coding Habits:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Use `let` early, refactor later</li>
            <li>Readable > Clever</li>
            <li>Copy → Refine → Abstract</li>
            <li>Keep logic near UI</li>
          </ul>
        </section>

        <footer className="pt-10 pb-20 text-center text-sm text-neutral-400">
          Built by <a href="https://github.com/pavanscales" target="_blank" rel="noreferrer" className="underline">pavanscales</a> — open to collab 🤝
        </footer>
      </main>
    </div>
  );
};

export default Stack;
