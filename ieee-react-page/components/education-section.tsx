import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Award, FileText, Video } from "lucide-react"

const educationResources = [
  {
    icon: Video,
    title: "Online Courses & Certifications",
    items: [
      "IEEE Professional Certification Programs",
      "Continuing Education Units (CEUs)",
      "Technical Skills Development",
    ],
  },
  {
    icon: FileText,
    title: "Research Papers & Journals",
    items: ["IEEE Xplore Digital Library", "Conference Proceedings", "Technical Standards Documents"],
  },
  {
    icon: Award,
    title: "Professional Development",
    items: ["Leadership Training Programs", "Industry Certification Prep", "Career Advancement Resources"],
  },
  {
    icon: BookOpen,
    title: "Educational Materials",
    items: ["Technical eBooks & Magazines", "Webinar Series", "Tutorial Videos"],
  },
]

export function EducationSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-ieee-blue dark:text-white">Educational Resources</h2>
        <p className="text-lg text-ieee-blue/70 dark:text-gray-400">
          Advance your knowledge with IEEE's comprehensive learning materials
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {educationResources.map((resource, index) => {
          const Icon = resource.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-ieee-blue dark:bg-ieee-accent text-white group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-ieee-blue dark:text-white">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-ieee-blue/70 dark:text-gray-300">
                      <span className="text-ieee-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-white dark:bg-ieee-dark hover:bg-ieee-light dark:hover:bg-ieee-accent/20 text-ieee-blue dark:text-white border-ieee-blue dark:border-white/20"
                >
                  Access Resources
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
