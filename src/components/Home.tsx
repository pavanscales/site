
import React from 'react';

const Home = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pawan Pediredla</h1>

      <p>
        contributor at <a href="https://cal.com" className="font-medium" target="_blank" rel="noreferrer">cal.com</a>. 
        focus on core engineering. no fluff. just systems, tools, and performance.  
        stack: typescript, next.js, golang, rust, node.js.  
        tools: vim, unix, low-level apis.  
        currently building my own js runtime.
      </p>

      <p>things i've worked on:</p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>jpeg encoder</strong> — wrote a fast jpeg encoder in pure JS.  
          <a href="https://github.com/pawanscales/jpeg_encoder" className="ml-1 font-medium" target="_blank" rel="noreferrer">[code]</a>
        </li>
        <li>
          <strong>tool-lingo</strong> — curated, no-bloat, browser-based tools.  
          <a href="https://tool-lingo.vercel.app/" className="ml-1 font-medium" target="_blank" rel="noreferrer">[site]</a>
        </li>
        <li>
          <strong>no fluff</strong> — connects devs to real problems worth solving.  
          <a href="https://nofulff.vercel.app/" className="ml-1 font-medium" target="_blank" rel="noreferrer">[site]</a>
        </li>
        <li>
          <strong>cal.com</strong> — contributed to codebase: bugfixes, features, core logic  
          <a href="https://github.com/calcom/cal.com/pulls?q=is%3Apr+author%3Apavanscales" className="ml-1 font-medium" target="_blank" rel="noreferrer">[PRs]</a>
        </li>
        <li>
          <strong>alumni.meet</strong> — alumni–freshers connect platform, SIH hackathon  
          <a href="https://github.com/pawanscales/codeforces" className="ml-1 font-medium" target="_blank" rel="noreferrer">[code]</a>
        </li>
        <li>
          <strong>stripe.regional</strong> — SDK for regional stripe payments  
          <a href="https://github.com/pawanscales/stripe_regional_payment_acceralator" className="ml-1 font-medium" target="_blank" rel="noreferrer">[code]</a>
        </li>
      </ul>

      <p className="text-sm text-gray-600">
        github: <a href="https://github.com/pavanscales" className="font-medium" target="_blank" rel="noreferrer">pavanscales</a>  
        | site: <a href="https://pavanscales.vercel.app" className="font-medium" target="_blank" rel="noreferrer">pavanscales.vercel.app</a>
      </p>
    </div>
  );
};

export default Home;
