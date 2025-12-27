import { Dumbbell, Target, Trophy, Users } from "lucide-react";
import aboutImage from "../assets/img/about-training.jpg";

const features = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power with our premium equipment",
  },
  {
    icon: Target,
    title: "Focused Discipline",
    description: "Develop mental fortitude alongside physical strength",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Join hundreds who have transformed their bodies here",
  },
  {
    icon: Users,
    title: "Community",
    description: "Train alongside motivated individuals who push each other",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.05]">
              <img
                src={aboutImage}
                alt="Professional Training"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">
                      10+ Years
                    </div>
                    <div className="text-sm text-muted-foreground">
                      of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
                Transform Your Body,{" "}
                <span className="gold-text">Transform Your Life</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Gold Gym Kanthale, we believe that fitness is more than just physical 
                exercise—it's a lifestyle. Our state-of-the-art facility and 
                expert trainers are dedicated to helping you achieve your goals, 
                whether you're just starting out or pushing for new personal records.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-surface-secondary border border-white/[0.05] hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(43_70%_52%/0.3)] transition-shadow duration-300">
                    <feature.icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;