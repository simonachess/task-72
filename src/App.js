import "./App.css";
import Tags from "./Tags.js"

function App() {

	const tags = ["boomdotdev", "task", "tags", "react"]

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
		  <Tags tags={tags}></Tags>
        </div>
      </div>
    </div>
  );
}

export default App;
