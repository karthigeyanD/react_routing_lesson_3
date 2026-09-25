const Skill = () => {
  const skills = [
    { icon: '⚛️', name: 'React', level: 'Advanced', percent: 85 },
    { icon: '🟨', name: 'JavaScript', level: 'Advanced', percent: 90 },
    { icon: '🎨', name: 'CSS', level: 'Intermediate', percent: 75 },
    { icon: '📄', name: 'HTML', level: 'Advanced', percent: 95 },
    { icon: '🟢', name: 'Node.js', level: 'Intermediate', percent: 65 },
    { icon: '🗄️', name: 'MongoDB', level: 'Beginner', percent: 45 },
  ];

  return (
    <div className="main-content">
      <section className="page-hero animate-in">
        <span className="page-hero__badge">Skills</span>
        <h1 className="page-hero__title">
          Tech <span>Stack</span> & Tools
        </h1>
        <p className="page-hero__subtitle">
          A snapshot of the technologies and tools used in this project and beyond.
        </p>
      </section>

      <section className="skills-container">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className={`skill-card animate-in animate-in--delay-${i + 1}`}
          >
            <div className="skill-card__icon">{skill.icon}</div>
            <h3 className="skill-card__name">{skill.name}</h3>
            <span className="skill-card__level">{skill.level}</span>
            <div className="skill-card__bar-track">
              <div
                className="skill-card__bar-fill"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skill;