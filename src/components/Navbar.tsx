import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold tracking-tight text-foreground"
        >
          <span className="shine-text tracking-widest">Harvey Lacdo-o</span>
        </button>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
