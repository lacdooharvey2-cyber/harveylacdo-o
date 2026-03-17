const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Building digital<br />products with <span className="text-gradient">purpose</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer with 3+ years of experience building web applications 
              from concept to deployment. I specialize in React, TypeScript, and Node.js, 
              with a strong eye for design and user experience.
            </p>
            <p>
              I thrive in fast-paced environments where I can wear multiple hats — from 
              architecting backend systems to polishing frontend interfaces. I believe great 
              software is built at the intersection of engineering rigor and creative empathy.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
  
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
