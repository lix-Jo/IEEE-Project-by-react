"use client"

import Image from "next/image"
import { Home, Calculator, BookOpen, Newspaper, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeSection?: string
}

export function Sidebar({ activeSection }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "counter", label: "Counter", icon: Calculator },
    { id: "resources", label: "Resources", icon: BookOpen },
    { id: "news", label: "News", icon: Newspaper },
    { id: "quiz", label: "IEEE Quiz", icon: HelpCircle },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-ieee-blue dark:bg-ieee-dark border-r border-white/10 flex flex-col z-40 hidden lg:flex">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative w-12 h-12">
            <Image src="/images/ieee-1.png" alt="IEEE Logo" fill className="object-contain" />
          </div>
          <h2 className="text-lg font-bold text-white">IEEE Portal</h2>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                "text-white/80 hover:text-white hover:bg-white/10",
                activeSection === item.id && "bg-white/20 text-white font-medium",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-white/10">
        <p className="text-sm text-white/70 text-center font-medium">King Abdulaziz University</p>
      </div>
    </aside>
  )
}
