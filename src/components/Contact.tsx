import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
// import { toast } from "sonner";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Format message
    const message = `
Message request from website
    
Name    :  _${formData.name}_
email   :  _${formData.email}_
phone   :  _${formData.phone}_

*Message  :* 
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);

    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${"94717100072"}&text=${encodedMessage}` // opens WhatsApp app on mobile
      : `https://wa.me/${"94717100072"}?text=${encodedMessage}`; // opens WhatsApp Web/Desktop

    toast.success("Message sent successfully! We'll get back to you soon.");
    window.open(url, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
                Ready to Start Your{" "}
                <span className="gold-text">Transformation?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join Gold Gym today and take the first step towards achieving 
                your fitness goals. Our team is here to help you every step 
                of the way.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "123 Main Street, Kanthale, Sri Lanka",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+94 77 075 0851",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@goldgym.lk",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="glass-card p-6 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    Ready to commit?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Join our community of dedicated fitness enthusiasts
                  </p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 bg-gold-gradient text-background font-bold shadow-lg hover:shadow-[0_0_30px_hsl(43_70%_52%/0.4)] hover:scale-[1.02] active:scale-[0.98] h-12 rounded-2xl px-8 text-base group">
                  Join Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="glass-card p-8 rounded-3xl border border-white/[0.08]">
            <h3 className="font-display font-bold text-2xl text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 bg-gold-gradient text-background font-bold shadow-lg hover:shadow-[0_0_30px_hsl(43_70%_52%/0.4)] hover:scale-[1.02] active:scale-[0.98] h-14 rounded-2xl px-10 text-lg w-full group">
                {/* <Send className="w-5 h-5" /> */}
                <MessageCircle className="w-5 h-5"/>
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;