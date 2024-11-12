"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Menu, X } from "lucide-react";
import { useState } from "react";

export function BlockPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-bold">
                docs
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                  >
                    Start Here
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                  >
                    Roadmaps
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                  >
                    Teams
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                  >
                    Changelog
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                >
                  Login
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                >
                  Start Here
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                >
                  Roadmaps
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                >
                  Teams
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                >
                  Changelog
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                >
                  Login
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="py-16 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500 text-purple-400 mb-6 text-sm">
          <Eye className="w-4 h-4 mr-2" />
          Practice your skills with projects
        </div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          Developer Docs
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          roadmap.sh is a community effort to create roadmaps, guides and other
          educational content to help guide developers in picking up a path and
          guide their learnings.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold text-gray-300 mb-8">
          Language Based Learning
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: "Python", disabled: true, new: true, label: "New" },
            { name: "JavaScript", disabled: true },
            { name: "Java", disabled: true },
            { name: "C++", disabled: true },
            { name: "Ruby", disabled: true },
            { name: "PHP", disabled: true },
            { name: "Swift", disabled: true },
            { name: "Kotlin", disabled: true },
            { name: "Go", disabled: true },
            { name: "Rust", disabled: true },
            { name: "TypeScript", disabled: true },
            { name: "Scala", disabled: true },
          ].map((role) => (
            <Link
              href="#"
              key={role.name}
              className={role.disabled ? "pointer-events-none" : ""}
            >
              <Card
                className={`p-4 bg-[#1E293B] border-gray-700 transition-colors relative ${
                  role.disabled ? "opacity-50" : "hover:border-purple-500"
                }`}
              >
                <h3 className="text-sm font-medium text-gray-300 text-center">
                  {role.name}
                </h3>
                {role.new && (
                  <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    {role.label}
                  </span>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold text-gray-300 mb-8">
          Framework Based Learning
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: "React", disabled: true },
            { name: "Angular", disabled: true },
            { name: "Vue.js", disabled: true },
            { name: "Django", disabled: true },
            { name: "Spring Boot", disabled: true },
            { name: "Laravel", disabled: true },
            { name: "Express.js", disabled: true },
            { name: "Flutter", disabled: true },
            { name: "TensorFlow", disabled: true },
            { name: "PyTorch", disabled: true },
            { name: "Next.js", disabled: true },
            { name: "Svelte", disabled: true },
          ].map((skill) => (
            <Link
              href="#"
              key={skill.name}
              className={skill.disabled ? "pointer-events-none" : ""}
            >
              <Card
                className={`p-4 bg-[#1E293B] border-gray-700 transition-colors ${
                  skill.disabled ? "opacity-50" : "hover:border-purple-500"
                }`}
              >
                <h3 className="text-sm font-medium text-gray-300 text-center">
                  {skill.name}
                </h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold text-gray-300 mb-8">
          Job Based Learning
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: "Software Engineer", disabled: true },
            { name: "Data Scientist", disabled: true },
            { name: "DevOps Engineer", disabled: true },
            { name: "Full Stack Developer", disabled: true },
            { name: "ML Engineer", disabled: true, new: true, label: "New" },
            { name: "Cloud Architect", disabled: true },
            {
              name: "Security Engineer",
              disabled: true,
              new: true,
              label: "New",
            },
            { name: "Mobile Developer", disabled: true },
            { name: "UI/UX Designer", disabled: true },
            { name: "Database Admin", disabled: true },
            { name: "System Architect", disabled: true },
            { name: "QA Engineer", disabled: true },
          ].map((role) => (
            <Link
              href="#"
              key={role.name}
              className={role.disabled ? "pointer-events-none" : ""}
            >
              <Card
                className={`p-4 bg-[#1E293B] border-gray-700 transition-colors relative ${
                  role.disabled ? "opacity-50" : "hover:border-purple-500"
                }`}
              >
                <h3 className="text-sm font-medium text-gray-300 text-center">
                  {role.name}
                </h3>
                {role.new && (
                  <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    {role.label}
                  </span>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
