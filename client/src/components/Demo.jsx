import { SITE, IMAGES } from "../data";

export default function Demo() {
  return (
    <section id="demo" className="section demo">
      <div className="container">
        <h2 className="section__title">See Gbénu in Action</h2>
        <p className="section__lead">
          The prototype is live. Explore the AI tutor, the adaptive quiz, and
          the keyboard simulator directly — no slides needed.
        </p>

        <div className="demo-gallery">
          <div className="demo-gallery__main">
            <img src={IMAGES.demo[0]} alt="Gbénu AI tutor screen" />
          </div>
          <div className="demo-gallery__side">
            <img src={IMAGES.demo[1]} alt="Gbénu adaptive quiz screen" />
            <img src={IMAGES.demo[2]} alt="Gbénu keyboard simulator screen" />
          </div>
        </div>

        <a
          className="btn btn--primary btn--lg"
          href={SITE.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch the Prototype
        </a>
        <p className="demo__note">Opens the working Gbénu app in a new tab.</p>
      </div>
      <div className="pattern-strip" aria-hidden="true" />
    </section>
  );
}
