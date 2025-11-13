"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <Link href="/" className="text-2xl font-bold">Next Year</Link>
    </header>
  );
}