import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Let's <span className="text-gradient">connect</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a question, 
              a project idea, or just want to say hi my inbox is always open.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">lacdooharvey2@gmail.com</span>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
