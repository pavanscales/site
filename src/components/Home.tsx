
import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Pawan Pediredla</h1>

      <p className="mb-6">
        Contributor at <a href="https://cal.com" className="font-medium" target="_blank" rel="noreferrer">Cal.com</a>.  
        I love building things that matter — focused on performance, dev experience, and simplicity. Passionate about reinventing the wheel, but only when it rolls better.
      </p>

      <p className="mb-6">
        I mostly work with TypeScript, React, Next.js, and Node.js. Comfortable across the stack. 
        I've recently been exploring JavaScript runtimes and building minimal server components from scratch.
      </p>

      <p className="mb-6">
        Some things I’ve worked on:
      </p>

      <ul className="list-disc list-inside space-y-3 ml-4">
        <li>
          <strong>Alumni.meet</strong> — Alumni–Fresher connect platform built for a national-level hackathon (SIH).  
          <a href="https://github.com/pawanscales/codeforces" target="_blank" rel="noreferrer" className="font-medium ml-1">[repo]</a>
        </li>
        <li>
          <strong>stripe.regional</strong> — Stripe SDK focused on accelerating regional payment integrations.  
          <a href="https://github.com/pawanscales/stripe_regional_payment_acceralator" target="_blank" rel="noreferrer" className="font-medium ml-1">[repo]</a>
        </li>
        <li>
          <strong>jpeg.comp</strong> — a blazing fast JPEG encoder written from scratch for learning compression internals.  
          <a href="https://github.com/pawanscales/jpeg_encoder" target="_blank" rel="noreferrer" className="font-medium ml-1">[repo]</a>
        </li>
        <li>
          <strong>No Fluff</strong> — connects problem-solvers with real-world challenges, eliminating startup noise.  
          <a href="https://nofulff.vercel.app/" target="_blank" rel="noreferrer" className="font-medium ml-1">[site]</a>
        </li>
        <li>
          <strong>Tool-Lingo</strong> — a curated list of simple, useful, and free online tools. No ads, no clutter.  
          <a href="https://tool-lingo.vercel.app/" target="_blank" rel="noreferrer" className="font-medium ml-1">[site]</a>
        </li>
      </ul>

      <p className="mb-6">
        I care about code quality, dev velocity, and user experience. Always shipping, always learning.
      </p>
    </div>
  );
};

export default Home;
