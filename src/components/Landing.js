export default function Landing() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Welcome </h2>
      <br></br>
      <div className="info-and-images">
        <div className="info-links-container">
          <div id="info-links-display">
            This is where my resume would display
          </div>
          <div id="info-links-list">LinkedIn Resume ...</div>
        </div>
        <div className="images-container">
          <div id="selected-image">Image Chosen Goes Here</div>
          <div id="images-list">IMG IMG IMG IMG</div>
        </div>
      </div>
      <br></br>
      <div className="projects-container">
        <div id="tech-stacks">
          <h3>Tech Stack</h3>
          ICONS: HTML 5 CSS React etc INLINE: 33% of Width
        </div>
        <div id="projects">
          <h3>Projects:</h3>
          FILTER TECH stacks CARDS Pagination
        </div>
      </div>
    </main>
  );
}
