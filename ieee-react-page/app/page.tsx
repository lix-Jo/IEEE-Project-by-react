"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Moon, Sun, Menu } from "lucide-react"
import { MainSection } from "@/components/main-section"
import { Counter } from "@/components/counter"
import { ResourcesSection } from "@/components/resources-section"
import { NewsSection } from "@/components/news-section"
import { QuizSection } from "@/components/quiz-section"
import { NetworkingSection } from "@/components/networking-section"
import { EducationSection } from "@/components/education-section"
import { Sidebar } from "@/components/sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function IEEEPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [displayText, setDisplayText] = useState("")
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleInputSubmit = () => {
    setDisplayText(userInput)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "counter", "resources", "news", "quiz"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Sidebar activeSection={activeSection} />

      <MobileSidebar activeSection={activeSection} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="lg:ml-64">
        {/* Header with Dark Mode Toggle */}
        <header className="sticky top-0 z-30 bg-ieee-blue dark:bg-ieee-dark border-b border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setMobileMenuOpen(true)}
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <Image src="/images/ieee-1.png" alt="IEEE Logo" width={60} height={60} className="object-contain" />
              <h1 className="text-2xl font-bold text-white">IEEE Portal</h1>
            </div>

            <Button
              onClick={toggleDarkMode}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 space-y-16">
          {/* Main Section with IEEE Logo */}
          <section id="home">
            <MainSection />
          </section>

          {/* Counter Component */}
          <section id="counter" className="max-w-2xl mx-auto scroll-mt-20">
            <Counter />
          </section>

          {/* Interactive Input Section */}
          <section className="max-w-2xl mx-auto">
            <Card className="bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-ieee-blue dark:text-white">Interactive Message Board</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Type something and see it displayed below
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleInputSubmit()}
                    className="flex-1 bg-white dark:bg-ieee-dark border-ieee-light dark:border-white/20 text-ieee-blue dark:text-white"
                  />
                  <Button
                    onClick={handleInputSubmit}
                    className="bg-ieee-blue hover:bg-ieee-blue-hover dark:bg-ieee-accent dark:hover:bg-ieee-accent/80 text-white"
                  >
                    Submit
                  </Button>
                </div>
                {displayText && (
                  <div className="p-4 rounded-lg bg-ieee-light dark:bg-ieee-dark border border-ieee-blue/20 dark:border-white/10">
                    <p className="text-ieee-blue dark:text-white font-medium">{displayText}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Feature Cards */}
          <section className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10 hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-ieee-blue to-ieee-accent rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/ieee-technology-conference-presentation.jpg" alt="IEEE Technology" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-ieee-blue dark:text-white">IEEE Conferences</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Join global technology conferences and workshops to advance your knowledge
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10 hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-ieee-accent to-ieee-blue rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/engineering-standards-and-innovation-blueprints.jpg" alt="IEEE Standards" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-ieee-blue dark:text-white">Standards & Innovation</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Access cutting-edge standards and contribute to technological advancement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10 hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-ieee-blue to-ieee-accent rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/global-engineering-community-networking-profession.jpg" alt="IEEE Community" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-ieee-blue dark:text-white">Global Community</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Connect with over 400,000 members worldwide in the largest technical organization
                </CardDescription>
              </CardHeader>
            </Card>
          </section>

          {/* Resources Section */}
          <section id="resources" className="scroll-mt-20">
            <ResourcesSection />
          </section>

          {/* News Section */}
          <section id="news" className="scroll-mt-20">
            <NewsSection />
          </section>

          {/* Quiz Section */}
          <section id="quiz" className="scroll-mt-20">
            <QuizSection />
          </section>

          {/* Networking Section */}
          <NetworkingSection />

          {/* Education Section */}
          <EducationSection />
        </main>

        {/* Footer */}
        <footer className="bg-ieee-blue dark:bg-ieee-dark border-t border-white/10 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div>
                <h3 className="font-bold mb-3">About IEEE</h3>
                <p className="text-sm text-white/80">
                  The world's largest technical professional organization dedicated to advancing technology for
                  humanity.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Publications
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Standards
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Connect</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Societies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Chapters
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Support</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/80 text-sm">
              <p>© 2025 IEEE. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
