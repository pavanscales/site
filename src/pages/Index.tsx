import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';

const Index = () => (
  <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0">
    <Header />
    <main className="py-8">
      <Home />
    </main>
  </div>
);

export default Index;
