import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/gold-gym-logo.png"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  //{ name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-white/[0.05] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              {/* <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(43_70%_52%/0.5)] transition-all duration-300">
                <Dumbbell className="w-5 h-5 text-background" />
              </div> */}
              <img src={logo} alt="Gold Gym Logo" className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"/>
            </div>
            <span className="font-display font-bold text-xl gold-text">
              Gold Gym
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group text-sm font-medium"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 bg-gold-gradient text-background font-bold shadow-lg hover:shadow-[0_0_30px_hsl(43_70%_52%/0.4)] hover:scale-[1.02] active:scale-[0.98] h-12 rounded-2xl px-8 text-base">
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <div className="glass-card p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-lg"
              >
                {link.name}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 bg-gold-gradient text-background font-bold shadow-lg hover:shadow-[0_0_30px_hsl(43_70%_52%/0.4)] hover:scale-[1.02] active:scale-[0.98] h-12 rounded-2xl px-8 text-base w-full mt-4">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header