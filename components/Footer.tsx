"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center text-sm">
      &copy; {new Date().getFullYear()} Next Year
    </footer>
  );
}