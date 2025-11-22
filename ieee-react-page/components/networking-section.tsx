import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Heart, Globe } from "lucide-react"

const opportunities = [
  {
    icon: Users,
    title: "IEEE Mentorship Program",
    description: "Connect with experienced professionals who can guide your career development.",
    action: "Join Mentorship",
  },
  {
    icon: Briefcase,
    title: "Volunteer Opportunities",
    description: "Contribute to IEEE activities and give back to the engineering community.",
    action: "Explore Roles",
  },
  {
    icon: Heart,
    title: "Student Chapters",
    description: "Join local student chapters to network and collaborate with peers.",
    action: "Find Your Chapter",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Work on international projects with engineers from around the world.",
    action: "Connect Globally",
  },
]

export function NetworkingSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-ieee-blue dark:text-white">Networking Opportunities</h2>
        <p className="text-lg text-ieee-blue/70 dark:text-gray-400">
          Connect, collaborate, and grow with the IEEE community
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {opportunities.map((item, index) => {
          const Icon = item.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10 hover:scale-105 text-center"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-ieee-blue dark:bg-ieee-accent text-white group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-ieee-blue dark:text-white">{item.title}</CardTitle>
                <CardDescription className="dark:text-gray-300">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full bg-white dark:bg-ieee-dark hover:bg-ieee-light dark:hover:bg-ieee-accent/20 text-ieee-blue dark:text-white border-ieee-blue dark:border-white/20"
                >
                  {item.action}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
