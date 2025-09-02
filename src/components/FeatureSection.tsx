import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Newspaper, Gift, Target, ExternalLink } from "lucide-react"

export function FeatureSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards in sequence
            [0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Newspaper,
      title: "Gaming News Hub",
      description: "Stay ahead with breaking gaming news, industry updates, and exclusive insider information delivered fresh daily.",
      highlights: ["Breaking news alerts", "Industry analysis", "Developer interviews", "Event coverage"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Gift,
      title: "Free Games Vault",
      description: "Never miss a free game again! Get instant notifications for Epic Games Store, Steam, and other platform giveaways.",
      highlights: ["Weekly free games", "Limited-time offers", "DLC giveaways", "Platform alerts"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Game Recommendations",
      description: "Discover your next favorite game with our AI-powered recommendation engine and community-driven suggestions.",
      highlights: ["Personalized picks", "Community favorites", "Hidden gems", "Trending games"],
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-gaming bg-clip-text text-transparent">
            Why Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience gaming like never before with our comprehensive Discord server
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleCards.includes(index)
            
            return (
              <Card 
                key={index}
                className={`feature-card group cursor-pointer border-border/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="btn-gaming-accent text-lg px-10 py-6 rounded-2xl group"
            onClick={() => window.open('https://discord.gg/jp3GeADKPV', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
            Experience It Yourself
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands of gamers in our vibrant community
          </p>
        </div>
      </div>
    </section>
  )
}