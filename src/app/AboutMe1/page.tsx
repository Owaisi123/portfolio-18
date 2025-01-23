import React from "react";
import Image from "next/image";

const AboutMe1 = () => {
  const skills = [
    { name: "HTML", color: "bg-red-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Git & GitHub", color: "bg-orange-500" },
  ];

  return (
    <div>
      <section className="bg-white text-gray-800">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              About Me
            </h1>
            <p className="text-lg text-gray-600">
              A passionate Front-End Developer dedicated to crafting beautiful
              and functional web experiences.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                Hi, I'm [Owais]!
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I specialize in building responsive, user-friendly websites with
                a strong focus on performance and accessibility. I’m skilled in
                technologies like{" "}
                <span className="font-medium text-indigo-600">
                  Next.js, React, TypeScript
                </span>
                , and modern CSS frameworks like{" "}
                <span className="font-medium text-indigo-600">
                  Tailwind CSS
                </span>
                .
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                writing blog posts about programming, or contributing to
                open-source projects.
              </p>
              <div className="mt-6">
                <a
                  href="/Projects"
                  className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  View My Projects
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <Image
                src={
                  "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                height={400}
                width={400}
                alt="Laptop Image"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-center mb-8">
              My Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`${skill.color} text-white p-4 rounded-lg shadow hover:shadow-md transition`}
                >
                  <p className="text-lg font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe1;
