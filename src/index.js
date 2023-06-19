import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="snow-white.jpg" alt="snow white" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>My name is Snow White</h1>
      <p>Dainty lady, looking for her Mr. Right 💍.</p>

      <p>
        {" "}
        I'm told my face is the stuff of fairy tales. My pristine bowl-cut
        blow-dry is never out of place despite my challenging living conditions
        (shack in the forest, you don't wanna know 🤦🏻‍♀️). Oh, and woodland animals
        dance at my feet, it's weird but I kinda like it. I'm also sure I am /
        was / will be a princess one day, so paupers need not apply.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Loves red red apples" emoji="🍎" color="#F98B73" />
      <Skill skill="Likes people great and small" emoji="📐" color="pink" />
      <Skill skill="Fairest of them all" emoji="🪞" color="#F9FAA3" />
      <Skill skill="Favourite number:" emoji="7️⃣" color="#E6C5FA" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
