import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const newsItems = [
  {
    title: "IEEE International Conference on Robotics and Automation",
    date: "May 13-17, 2025",
    location: "Atlanta, Georgia, USA",
    category: "Conference",
    description: "Join leading researchers in robotics and automation for cutting-edge presentations.",
  },
  {
    title: "IEEE/CVF Computer Vision and Pattern Recognition",
    date: "June 10-17, 2025",
    location: "Nashville, Tennessee, USA",
    category: "Workshop",
    description: "The premier annual computer vision event covering the latest in AI and ML.",
  },
  {
    title: "IEEE International Symposium on Circuits and Systems",
    date: "May 25-28, 2025",
    location: "London, United Kingdom",
    category: "Symposium",
    description: "Explore advances in circuit theory, design, and applications.",
  },
  {
    title: "IEEE Power & Energy Society General Meeting",
    date: "July 20-24, 2025",
    location: "Orlando, Florida, USA",
    category: "Conference",
    description: "Discuss innovations in power systems, renewable energy, and smart grids.",
  },
]

export function NewsSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-ieee-blue dark:text-white">Latest News & Events</h2>
        <p className="text-lg text-ieee-blue/70 dark:text-gray-400">
          Stay updated with upcoming IEEE conferences and workshops
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10 hover:border-ieee-blue dark:hover:border-ieee-accent"
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-ieee-blue dark:bg-ieee-accent text-white">{item.category}</Badge>
              </div>
              <CardTitle className="text-ieee-blue dark:text-white group-hover:text-ieee-accent dark:group-hover:text-ieee-accent transition-colors">
                {item.title}
              </CardTitle>
              <CardDescription className="dark:text-gray-300">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-ieee-blue/70 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ieee-blue/70 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{item.location}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
