import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Dylan Fawkes</h1>
      <h2 style={{ textAlign: "right" }}>WIP landing page</h2>
      <h6 style={{ textAlign: "right" }}>what are you doing here</h6>
      <div style={{ textAlign: "left" }}>
        <span>Projects</span>
        <ul>
          <li>
            <a href="https://hiscore.eggy.moe">Hiscore</a>
          </li>
          <li>Tmux3270</li>
        </ul>
        <span>Social</span>
        <ul>
          <li>
            <a href="https://twitter.com/pathofeggxile">Twitter</a>
          </li>
          <li>LinkedIn</li>
        </ul>
        <span>TTRPG</span>
        <ul>
          <li>
            <a href="https://foundry.eggy.moe">Pathfinder 2e: Monkey Vaults</a>
          </li>
          <li>D&D 5e: Unnamed</li>
        </ul>
        <span>Other</span>
        <ul>
          <li>Screenshots</li>
          <li>
            <a href="https://github.com/dfawkes93">github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
