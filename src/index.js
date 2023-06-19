import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
        <Intro />
        <Skillset />
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
        challenging living condiditions (shack in forest) and I'm told my face
        is the stuff of fairy tales. I'm also sure I am / was / will be a
        princess one day, so paupers need not apply.
      </p>
    </div>
  );
}

function Skillset() {
  return (
    <div className="skill-list">
      <p className="skill">Loves red red apples 🍎</p>
      <p className="skill">Likes people great and small 📐 </p>
      <p className="skill">Fairest of them all 🪞</p>
      <p className="skill">Favourite number : 7️⃣</p>
      <p className="skill">Born 1932 👵🏻</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
