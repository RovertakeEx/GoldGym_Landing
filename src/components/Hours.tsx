import { Clock, Sun, Moon } from "lucide-react";

const Hours = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative glass-card p-8 sm:p-12 rounded-3xl border border-primary/20">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shadow-[0_0_30px_hsl(43_70%_52%/0.3)]">
                  <Clock className="w-7 h-7 text-background" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-3xl text-foreground">
                    Opening Hours
                  </h2>
                  <p className="text-muted-foreground">
                    We're open every day for your convenience
                  </p>
                </div>
              </div>

              {/* Hours Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Morning Hours */}
                <div
                  className={`p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 group hover-lift opacity-100 translate-y-0`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Sun className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground">
                        Morning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Early Bird Sessions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 text-gold">
                    <span className="stat-number text-3xl">6:00 AM</span>
                    <span className="text-muted-foreground">—</span>
                    <span className="stat-number text-3xl">12:00 PM</span>
                  </div>
                </div>

                {/* Evening Hours */}
                <div
                  className={`p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 group hover-lift opacity-100 translate-y-0`}
                  style={{ transitionDelay: "350ms" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Moon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground">
                        Evening
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        After Work Sessions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 text-gold">
                    <span className="stat-number text-3xl">4:00 PM</span>
                    <span className="text-muted-foreground">—</span>
                    <span className="stat-number text-3xl">11:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Note */}
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  * Special hours may apply during holidays. Contact us for
                  details.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;