import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "Loves red red apples", emoji: "🍎", color: "#F98B73" },
  { skill: "Likes people great and small", emoji: "📐", color: "pink" },
  { skill: "Fairest of them all", emoji: "🪞", color: "#F9FAA3" },
  { skill: "Favourite number:", emoji: "7️⃣", color: "#E6C5FA" },
];

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
      <h1>Snow White</h1>
      <p>Dainty lady, looking for her Mr. Right 💍.</p>

      <p>
        {" "}
        I'm told my face is the stuff of fairy tales. It's true I have
        challenging living conditions right now (overcrowded shack in the
        forest, you don't wanna know 🤦🏻‍♀️). But woodland creatures dance at my
        feet every morning out here so it's swings and roundabouts. I'm also
        sure I am / was / will be a princess one day, so yeah, you can get
        excited about that.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} emoji={skill.emoji} />
      ))}
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
