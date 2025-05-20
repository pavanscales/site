
import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Pawan Pediredla</h1>
      <p className="mb-6">
        Contributor at <a href="https://cal.com" className="font-medium" target="_blank" rel="noreferrer">Cal.com</a>.  
        I love rating, reinventing the wheel, and building impactful products.
      </p>
      <p className="mb-6">
        Currently writing my own JavaScript runtime and minimal server components.
      </p>
      <p className="mb-6">Before this, I worked on:</p>
      <ul className="list-disc list-inside space-y-3 ml-4">
        <li>
          Alumni connect for freshers and alumni at country-wide hackathon SIH: <a href="https://github.com/pawanscales/codeforces" className="font-medium" target="_blank" rel="noreferrer">Alumni.meet</a>
        </li>
        <li>
          Stripe SDK for regional payment: <a href="https://github.com/pawanscales/stripe_regional_payment_acceralator" className="font-medium" target="_blank" rel="noreferrer">stripe.regional</a>
        </li>
        <li>
          Fast JPEG encoder: <a href="https://github.com/pawanscales/jpeg_encoder" className="font-medium" target="_blank" rel="noreferrer">jpeg.comp</a>
        </li>
      </ul>

      <p className="mb-6">I occasionally write about my open source contributions.</p>

      <div>
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <a href="https://nofulff.vercel.app/" target="_blank" rel="noreferrer" className="font-medium">
              No Fluff
            </a> — connects problem-solvers with real-world challenges to create solutions people need.
          </li>
          <li>
            <a href="https://tool-lingo.vercel.app/" target="_blank" rel="noreferrer" className="font-medium">
              Tool-Lingo
            </a> — a curated list of simple, effective, and free online tools.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
