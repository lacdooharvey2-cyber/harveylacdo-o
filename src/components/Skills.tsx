const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "CI/CD", "Figma", "AWS"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Team Collaboration", "Agile", "Mentoring"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">Skills</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-12">
          My <span className="text-gradient">toolkit</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card rounded-xl p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
