"use client";
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YearCounter from '../components/YearCounter';

export default function Page() {
  const [year, setYear] = useState(new Date().getFullYear() + 1);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        <YearCounter year={year} />
      </main>
      <Footer />
    </div>
  );
}