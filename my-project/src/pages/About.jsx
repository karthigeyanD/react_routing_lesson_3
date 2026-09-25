const About = () => {
  const stats = [
    { number: '3+', label: 'Pages' },
    { number: '5+', label: 'Components' },
    { number: '∞', label: 'Possibilities' },
    { number: '0', label: 'Page Reloads' },
  ];

  return (
    <div className="main-content">
      <section className="page-hero animate-in">
        <span className="page-hero__badge">About</span>
        <h1 className="page-hero__title">
          The <span>Story</span> Behind the App
        </h1>
        <p className="page-hero__subtitle">
          A hands-on project exploring the fundamentals of React Router
          and component-driven architecture.
        </p>
      </section>

      <section className="about-grid animate-in animate-in--delay-2">
        <div className="about-content">
          <p className="about-content__text">
            This application was built as a learning exercise to master
            client-side routing in React. It demonstrates how to create a
            multi-page experience without traditional server-side navigation.
          </p>
          <p className="about-content__text">
            Using React Router, each page transition happens instantly in the
            browser, delivering a smooth, app-like feel. The shared Navbar and
            Footer components persist across routes, showcasing the power of
            layout composition.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`about-stat animate-in animate-in--delay-${i + 3}`}
            >
              <div className="about-stat__number">{stat.number}</div>
              <div className="about-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;