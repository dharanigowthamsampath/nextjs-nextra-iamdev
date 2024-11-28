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
                Developer Docs
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                  >
                    About Us
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
                </div>
              </div>
            </div>
            {/* <div className="hidden md:block">
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
            </div> */}
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
                  About Us
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
                {/* <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:bg-purple-500 hover:text-purple-100"
                >
                  Login
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Sign Up
                </Button> */}
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
        <h1 className="text-5xl font-bold text-transparent bg-clip-text p-3 bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          Learn&apos;s Docs
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Developer&apos;s docs is a community effort to create roadmaps, guides
          and other educational content to help guide developers in picking up a
          path and guide their learnings.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold text-gray-300 mb-8">
          Language Based Learning
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            {
              name: "C",
              url: "/C",
              disabled: false,
              new: true,
              label: "New",
            },
            {
              name: "Python",
              url: "/python",
              disabled: true,
            },
            { name: "JavaScript", url: "/javascript", disabled: true },
            { name: "Java", url: "/java", disabled: true },
            { name: "C++", url: "/cpp", disabled: true },
            { name: "Ruby", url: "/ruby", disabled: true },
            { name: "PHP", url: "/php", disabled: true },
            { name: "Swift", url: "/swift", disabled: true },
            { name: "Kotlin", url: "/kotlin", disabled: true },
            { name: "Go", url: "/go", disabled: true },
            { name: "Rust", url: "/rust", disabled: true },
            { name: "TypeScript", url: "/typescript", disabled: true },
          ].map((role) => (
            <Link
              href={role.url}
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
            { name: "React", url: "/react", disabled: true },
            { name: "Angular", url: "/angular", disabled: true },
            { name: "Vue.js", url: "/vue", disabled: true },
            { name: "Django", url: "/django", disabled: true },
            { name: "Spring Boot", url: "/spring-boot", disabled: true },
            { name: "Laravel", url: "/laravel", disabled: true },
            { name: "Express.js", url: "/express", disabled: true },
            { name: "Flutter", url: "/flutter", disabled: true },
            { name: "Next.js", url: "/next", disabled: true },
            { name: "Svelte", url: "/svelte", disabled: true },
          ].map((skill) => (
            <Link
              href={skill.url}
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
            {
              name: "Software Engineer",
              url: "/software-engineer",
              disabled: true,
            },
            { name: "Data Scientist", url: "/data-scientist", disabled: true },
            {
              name: "DevOps Engineer",
              url: "/devops-engineer",
              disabled: true,
            },
            {
              name: "Full Stack Developer",
              url: "/full-stack-developer",
              disabled: true,
            },
            { name: "ML Engineer", url: "/ml-engineer", disabled: true },
            {
              name: "Cloud Architect",
              url: "/cloud-architect",
              disabled: true,
            },
            {
              name: "Security Engineer",
              url: "/security-engineer",
              disabled: true,
            },
            {
              name: "Mobile App Developer",
              url: "/mobile-app-developer",
              disabled: true,
            },
            { name: "UI/UX Designer", url: "/ui-ux-designer", disabled: true },
            { name: "Database Admin", url: "/database-admin", disabled: true },
            {
              name: "System Architect",
              url: "/system-architect",
              disabled: true,
            },
            {
              name: "QA Engineer",
              url: "/qa-engineer",
              disabled: true,
              new: false,
            },
          ].map((role) => (
            <Link
              href={role.url}
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
                    new
                  </span>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/legal/privacy-policy"
                className="text-gray-400 hover:text-purple-400"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/legal/terms-of-use"
                className="text-gray-400 hover:text-purple-400"
              >
                Terms of Use
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/legal/cookie-policy"
                className="text-gray-400 hover:text-purple-400"
              >
                Cookie Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/legal/disclaimer"
                className="text-gray-400 hover:text-purple-400"
              >
                Disclaimer
              </Link>
            </div>
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Developer Docs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
