import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">AI Platform</h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-pink-500 transition duration-300">Home</Link>
        <Link href="/courses" className="hover:text-pink-500 transition duration-300">Courses</Link>
        <Link href="/contact" className="hover:text-pink-500 transition duration-300">Contact</Link>
      </div>

      {/* Login / Signup Buttons */}
      <div className="space-x-4">
        <Button className="border border-gray-500 text-white hover:border-pink-500 hover:text-pink-500 transition">
          Login
        </Button>
        <Button className="bg-pink-600 hover:bg-pink-700 transition px-5 py-2">
          Signup
        </Button>
      </div>
    </nav>
  );
}
