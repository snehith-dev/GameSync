import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gamepad2 } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-section">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gaming/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`fade-in ${isVisible ? 'animate' : ''} space-y-8`}>
          {/* Main headline */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gamepad2 className="w-12 h-12 text-primary glow-effect" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-gaming bg-clip-text text-transparent">
                GameSync
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your ultimate gaming Discord community for the latest news, free games, and personalized recommendations
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="btn-gaming text-lg px-8 py-6 rounded-2xl group"
              onClick={() => window.open('https://discord.gg/jp3GeADKPV', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              Join Our Discord
            </Button>
          </div>

          {/* Feature preview */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "📰", title: "Gaming News", desc: "Latest industry updates" },
              { icon: "🎮", title: "Free Games", desc: "Weekly free game alerts" },
              { icon: "💡", title: "Recommendations", desc: "Personalized game suggestions" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`fade-in ${isVisible ? 'animate' : ''} feature-card text-center`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}