const Home = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      text: 'Built with Vite and React for blazing-fast development and optimal performance.',
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      text: 'Clean, responsive interfaces using modern CSS techniques and glassmorphism effects.',
    },
    {
      icon: '🔄',
      title: 'Client-Side Routing',
      text: 'Seamless page transitions powered by React Router without full page reloads.',
    },
  ];

  return (
    <div className="main-content">
      <section className="page-hero animate-in">
        <span className="page-hero__badge">Welcome</span>
        <h1 className="page-hero__title">
          Build <span>Beautiful</span> Web Experiences
        </h1>
        <p className="page-hero__subtitle">
          A sleek three-page React application showcasing client-side routing,
          reusable components, and modern UI design patterns.
        </p>
      </section>

      <section className="card-grid">
        {features.map((feat, i) => (
          <div
            key={feat.title}
            className={`card animate-in animate-in--delay-${i + 1}`}
          >
            <div className="card__icon">{feat.icon}</div>
            <h3 className="card__title">{feat.title}</h3>
            <p className="card__text">{feat.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;