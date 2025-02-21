"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">AI Platform</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-pink-500 transition duration-300">
            Home
          </Link>
          <Link href="/courses" className="hover:text-pink-500 transition duration-300">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-pink-500 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Login / Signup Buttons (Hidden in Mobile) */}
        <div className="hidden md:flex space-x-4">
          <Button className="border border-gray-500 text-white hover:border-pink-500 hover:text-pink-500 transition">
            Login
          </Button>
          <Button className="bg-pink-600 hover:bg-pink-700 transition px-5 py-2">
            Signup
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 mt-4 py-4 space-y-4">
          <Link href="/" className="hover:text-pink-500 transition duration-300">
            Home
          </Link>
          <Link href="/courses" className="hover:text-pink-500 transition duration-300">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-pink-500 transition duration-300">
            Contact
          </Link>

          {/* Login / Signup Buttons (Mobile) */}
          <Button className="border border-gray-500 text-white hover:border-pink-500 hover:text-pink-500 transition w-full">
            Login
          </Button>
          <Button className="bg-pink-600 hover:bg-pink-700 transition px-5 py-2 w-full">
            Signup
          </Button>
        </div>
      )}
    </nav>
  );
}
