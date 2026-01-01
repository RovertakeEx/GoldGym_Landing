import { Dumbbell, Facebook, MessageCircle, ArrowUp, Music2 } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    //{ name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Personal Training", href: "#pricing" },
    { name: "Group Classes", href: "#" },
    { name: "Nutrition Plans", href: "#" },
    { name: "Fitness Assessment", href: "#" },
  ],
};

const socialLinks = [
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/94770750851" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61572501547974" },
  //{ name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Tiktok", icon: Music2, href: "https://tiktok.com/@gold.gym.kanthale" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface-primary" />

      <div className="container-custom section-padding !pb-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(43_70%_52%/0.5)] transition-all duration-300">
                <Dumbbell className="w-5 h-5 text-background" />
              </div>
              <span className="font-display font-bold text-xl gold-text">
                Gold Gym
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Sri Lanka's premier fitness destination. Transform your body, 
              transform your life with our world-class facilities and expert trainers.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-surface-secondary border border-white/[0.05] flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>123 main Street</li>
              <li>Kanthale, Sri Lanka</li>
              <li className="text-primary">+94 77 075 0851</li>
              <li className="text-primary">info@goldgym.lk</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Gold Gym. Powered By <a className="hover:text-primary transition-colors" href="https://rovertake.com" target="_blank">Rovertake</a>
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center hover:shadow-[0_0_20px_hsl(43_70%_52%/0.5)] transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-background group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;