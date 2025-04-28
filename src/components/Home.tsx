
import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Jose Casanova</h1>
      
      <p className="mb-6">
        I'm a founder and growth engineer. I like building and scaling
        impactful products.
      </p>
      
      <p className="mb-6">
        I co-founded <a href="#" className="font-medium">icy.tools</a>, a blockchain tracking and analytics
        platform, which was <span className="text-white">acquired</span> by <a href="#" className="font-medium">QuickNode</a>.
      </p>
      
      <p className="mb-6">
        At QuickNode, I helped integrate icy.tools and launched cool
        projects like <a href="#" className="font-medium">faucet.quicknode.com</a> and <a href="#" className="font-medium">jupiterapi.com</a> to make
        developers' lives easier.
      </p>
      
      <p className="mb-6">
        Before blockchain, I worked on a few things, such as:
      </p>

      <ul className="list-disc list-inside space-y-3 ml-4">
        <li>Improving health outcomes @ <a href="#" className="font-medium">Cityblock Health</a></li>
        <li>Modernizing property management @ <a href="#" className="font-medium">Caretaker</a></li>
        <li>Improving government efficiency @ <a href="#" className="font-medium">SeamlessDocs</a></li>
        <li>Helping students succeed @ <a href="#" className="font-medium">Clutch Prep</a></li>
        <li>Write a book on <a href="#" className="font-medium">Growth Hacking</a></li>
        <li>Help <a href="#" className="font-medium">Loop</a> launch on <a href="#" className="font-medium">Kickstarter</a></li>
      </ul>

      <p className="mb-6">
        I occasionally write.
      </p>

      <p className="mb-6">
        Some of my work has been featured in:
      </p>
    </div>
  );
};

export default Home;
