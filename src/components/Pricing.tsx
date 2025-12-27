import { Check, Sparkles, Crown, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Registration",
    price: "2,000",
    period: "one-time",
    description: "Get started with your fitness journey",
    icon: Zap,
    features: [
      "One-time registration fee",
      "Full gym access",
      "Locker access",
      "Fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Monthly",
    price: "2,500",
    period: "/month",
    description: "Perfect for regular gym-goers",
    icon: Sparkles,
    features: [
      "Full gym equipment access",
      "Cardio & weight zones",
      "Locker room access",
      "Flexible schedule",
      "Monthly progress check",
    ],
    popular: true,
  },
  {
    name: "Personal Training",
    price: "8,000",
    period: "/month",
    description: "One-on-one expert guidance",
    icon: Crown,
    features: [
      "Dedicated personal trainer",
      "Customized workout plans",
      "Nutrition guidance",
      "Weekly progress tracking",
      "Priority scheduling",
      "All Monthly benefits",
    ],
    popular: false,
  },
  {
    name: "Annual Package",
    price: "24,000",
    period: "/year",
    description: "Best value for committed members",
    icon: Crown,
    features: [
      "2 months FREE",
      "All Monthly benefits",
      "Free guest passes",
      "Priority equipment access",
      "Exclusive member events",
      "Merchandise discount",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-primary to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Membership Plans
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Choose Your{" "}
            <span className="gold-text">Transformation Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible pricing options designed to fit your fitness goals and budget. 
            All plans include full access to our premium facilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary/50"
                  : "bg-surface-secondary border border-white/[0.05] hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gold-gradient text-xs font-bold text-background">
                  Most Popular
                </div>
              )}

              {/* Plan Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular
                    ? "gold-gradient shadow-[0_0_20px_hsl(43_70%_52%/0.4)]"
                    : "bg-surface-elevated border border-white/[0.08]"
                }`}
              >
                <plan.icon
                  className={`w-6 h-6 ${
                    plan.popular ? "text-background" : "text-primary"
                  }`}
                />
              </div>

              {/* Plan Name */}
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">Rs.</span>
                <span className="font-display font-black text-4xl text-foreground ml-1">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-background" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(43_70%_52%/0.3)] hover:scale-[1.02] active:scale-[0.98] h-12 rounded-2xl px-8 text-base w-full ${plan.popular ? "bg-gold-gradient text-background font-bold" : "border-2 border-primary bg-transparent text-primary"}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;