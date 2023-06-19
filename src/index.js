import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
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
      <p>
        Dainty lady, looking for Mr. Right. Woodland animals dance at my feet,
        my pristine bowl-cut blow-dry is never out of place despite my
        challenging living condiditions (shack in forest, you don't wanna know)
        and I'm told my face is the stuff of fairy tales. I'm also sure I am /
        was / will be a princess one day, so paupers need not apply.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Loves red red apples" emoji="🍎" background-color="blue" />
      <Skill
        skill="Likes people great and small"
        emoji="📐"
        background-color="pink"
      />
      <Skill skill="Fairest of them all" emoji="🪞" background-color="lilac" />
      <Skill skill="Favourite number:" emoji="7️⃣" background-color="lilac" />
      <Skill skill="Born 1932" emoji="👵🏻" background-color: "red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <p>{props.skill}</p>
      <p>{props.emoji}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
