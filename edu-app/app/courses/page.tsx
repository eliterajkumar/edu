import Link from "next/link";
import Header from "@/components/Header";

export default function Courses() {
  const courses = [
    {
      title: "AI Fundamentals",
      thumbnail: "https://img.youtube.com/vi/2ePf9rue1Ao/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=2ePf9rue1Ao",
    },
    {
      title: "Machine Learning Basics",
      thumbnail: "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=7eh4d6sabA0",
    },
    {
      title: "Deep Learning Explained",
      thumbnail: "https://img.youtube.com/vi/aircAruvnKk/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=aircAruvnKk",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Component */}
      <Header />

      {/* Page Title with Home Redirection */}
      <div className="flex justify-center items-center mt-6">
        <Link href="/home">
          <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition">
            AI Platform
          </h1>
        </Link>
      </div>

      {/* Courses Section */}
      <h1 className="text-center text-3xl font-bold mt-6 mb-8">
        Explore Our Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {courses.map((course, index) => (
          <a
            key={index}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{course.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
