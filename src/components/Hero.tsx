import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
        <img
          src="/images/formal_portrait.jpeg"
          alt="Harvey Lacdo-o"
          className="w-[100px] h-[100px] md:w-[500px] md:h-[500px] shadow-lg animate-float"
        />

      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse items-center gap-12 md:items-start md:pr-64">
        <div className="w-full md:hidden flex justify-center">
          <img
            src="/images/formal_portrait.jpeg"
            alt="Harvey Lacdo-o"
            className="w-[100px] h-[100px] shadow-lg animate-float"
          />
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <p className="text-primary font-display font-medium text-sm tracking-widest uppercase animate-fade-up">
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Harvey<br />
            <span className="text-gradient">Lacdo-o</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Full-stack developer crafting clean, performant web experiences. 
            Passionate about design systems, accessibility, and shipping products that matter.
          </p>

          <div className="flex items-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-medium text-sm hover:opacity-90 transition-opacity">
              Get in touch
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-display font-medium text-sm hover:border-primary/50 transition-colors">
              View work
            </a>
          </div>

          <div className="flex items-center gap-5 pt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:lacdooharvey2@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={label}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-fade-in" style={{ animationDelay: "1s" }}>
          <ArrowDown size={18} className="text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
