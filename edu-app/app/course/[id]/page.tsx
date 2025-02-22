import { notFound } from "next/navigation";
import Header from "@/components/Header";


type Course = {
  title: string;
  videoUrl: string;
  description: string;
  lessons: { title: string; id: string }[];
};

// Dummy data
const courses: Record<string, Course> = {
  "python-100-days": {
    title: "Python 100 Days of Code",
    videoUrl: "https://www.youtube.com/embed/Zseq9ihmz9I", // Correct YouTube Embed URL
    description: "Learn Python step by step in 100 days with this free course.",
    lessons: [
      { title: "Day 1 - What is Programming?", id: "1" },
      { title: "Day 2 - My Python Success Story", id: "2" },
      { title: "Day 3 - Modules and pip in Python!", id: "3" },
    ],
  },
  "ai-fundamental": {
    title: "AI Fundamentals",
    videoUrl: "https://www.youtube.com/embed/WZ8g6deOyAk", // Correct Embed Format
    description: "Learn the basics of AI and its applications.",
    lessons: [
      { title: "Lesson 1 - Introduction to AI", id: "1" },
      { title: "Lesson 2 - Machine Learning Basics", id: "2" },
      { title: "Lesson 3 - Neural Networks", id: "3" },
    ],
  },
};

export default function CoursePage({ params }: { params: { id: string } }) {
  console.log("🚀 Course ID:", params.id); // Debugging log
  const course = courses[params.id];

  if (!course) {
    console.log("❌ Course not found, triggering 404");
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Header />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

        {/* Embedded YouTube Video */}
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={course.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4">{course.description}</p>

        {/* Sidebar Lessons */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Lessons</h2>
          <ul className="space-y-2">
            {course.lessons.map((lesson) => (
              <li
                key={lesson.id}
                className="bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer"
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2021 EduApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
