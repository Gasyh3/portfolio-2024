import React from 'react'
import "@/app/main.scss";
import Hero from './hero/page';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <main className="w-screen font-sans">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <Navbar />

        <Hero />
      </div>
    </main>
  );
}
