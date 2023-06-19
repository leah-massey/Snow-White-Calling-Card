import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Avatar />
      <div>
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="snow-white.jpg" />;
}

function Intro() {
  return <h1>My name is Snow White</h1>;
}

function Skillset() {
  return <p>These are my skills</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
