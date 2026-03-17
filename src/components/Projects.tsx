import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Event Planning booking system",
    description: "A web-based platform that allows users to easily browse, book, and manage event venues and services in one place. The system streamlines event planning by providing venue listings, service packages, scheduling, and secure online payments.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://github.com/lacdooharvey2-cyber/Event-Hub-",
    github: "https://github.com/lacdooharvey2-cyber/Event-Hub-",
  },
  {
    title: "HMO Connect: Web-Based Approval and Verification System",
    description: "A web-based system designed to streamline the approval and verification process of HMO services between hospitals and healthcare providers. It enables real-time membership verification, faster processing of Letters of Authorization (LOA), and efficient communication between HMO administrators and medical staff.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    link: "https://github.com/lacdooharvey2-cyber/HMO-Connect-Web-Based-Approval-and-Verification-System",
    github: "https://github.com/lacdooharvey2-cyber/HMO-Connect-Web-Based-Approval-and-Verification-System",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with custom charts, filters, and CSV export functionality.",
    tags: ["React", "D3.js", "Tailwind", "REST API"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">Projects</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-12">
          Selected <span className="text-gradient">work</span>
        </h2>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-display font-bold text-sm">0{i + 1}</span>
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
