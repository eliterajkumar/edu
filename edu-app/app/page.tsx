"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-[50vh] md:min-h-[45vh] flex flex-col items-center justify-center text-center p-6 sm:p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to AI Platform
        </h1>
        {isClient ? (
          <p className="text-center text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Confused about which course to take? Don't worry, we've got you covered!  
            Browse through the courses and find the best one for you—it's completely free!  
            <span className="font-semibold">EP</span> is our attempt to teach the basics and essential coding techniques  
            in a short time—techniques that took years to master.
          </p>
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}

        <Link href="/courses">
          <Button className="mt-6 px-6 py-3 text-lg font-semibold bg-pink-600 hover:bg-pink-700 transition duration-300 w-full sm:w-auto">
            Get Started
          </Button>
        </Link>
      </section>

      {/* Recommended Courses Section */}
      <section className="p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Recommended Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "🤖 AI Fundamentals", id: "ai-fundamental" },
            { title: "📊 Machine Learning", id: "machine-learning" },
            { title: "⚡ Deep Learning", id: "deep-learning" }
          ].map((course) => (
            <Card
              key={course.id}
              className="p-6 border border-gray-700 rounded-lg text-center shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <Link href={`/course/${course.id}`}>
                <Button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                  Start Watching
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-6 sm:p-10 bg-gray-800 rounded-lg mx-4 sm:mx-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-center italic text-gray-300">"This platform changed the way I learn AI!" - John Doe</p>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-900 mt-6">
        <p>© 2025 AI Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
