import React from 'react'
import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/img/hero-gym.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gold Gym Interior"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Radial Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Sri Lanka's Premier Fitness Destination
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="gold-text">Gold</span>{" "}
            <span className="text-foreground">Gym</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Train Hard. Stay Strong. Build Your Best Body.
          </p>

          {/* Description */}
          <p
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Experience world-class fitness training with state-of-the-art equipment 
            and expert personal trainers dedicated to your transformation.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href='#about' className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 bg-gold-gradient text-background font-bold shadow-lg hover:shadow-[0_0_30px_hsl(43_70%_52%/0.4)] hover:scale-[1.02] active:scale-[0.98] h-14 rounded-2xl px-10 text-lg group">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href='#pricing' className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(43_70%_52%/0.3)] hover:scale-[1.02] active:scale-[0.98] h-14 rounded-2xl px-10 text-lg group">
              <Play className="w-5 h-5" />
              View Plans
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "100+", label: "Active Members" },
              { value: "5+", label: "Years Experience" },
              { value: "2+", label: "Expert Trainers" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-3xl sm:text-4xl gold-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero