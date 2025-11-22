import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Users, Rocket, GraduationCap } from "lucide-react"

const resources = [
  {
    icon: Users,
    title: "IEEE Systems, Man, and Cybernetics Society (SMCS)",
    description: "Explore topics in human-machine systems, AI, and cybernetics.",
    link: "https://www.ieee.org/societies-and-communities/committees/smcs.html",
  },
  {
    icon: BookOpen,
    title: "IEEE Computer Society",
    description: "Resources for students in computer science and technology with industry collaboration.",
    link: "https://www.computer.org/membership/for-students",
  },
  {
    icon: Rocket,
    title: "IEEE AESS (Aerospace & Electronic Systems)",
    description: "Resources on aerospace, avionics, and advanced electronic systems.",
    link: "https://ieee-aess.org/",
  },
  {
    icon: GraduationCap,
    title: "IEEE Student Branches",
    description: "Join student organizations for workshops, events, and conferences.",
    link: "https://www.ieee.org/membership/student-branches.html",
  },
]

export function ResourcesSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-ieee-blue dark:text-white">IEEE Resources</h2>
        <p className="text-lg text-ieee-blue/70 dark:text-gray-400">
          Explore valuable resources from IEEE societies and communities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-ieee-blue dark:bg-ieee-accent text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-ieee-blue dark:text-white mb-2 group-hover:text-ieee-accent dark:group-hover:text-ieee-accent transition-colors">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300">{resource.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full bg-white dark:bg-ieee-dark hover:bg-ieee-light dark:hover:bg-ieee-accent/20 text-ieee-blue dark:text-white border-ieee-blue dark:border-white/20"
                  asChild
                >
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
