import React from "react";
import ReactDOM from "react-dom/client";

const date = new Date(2022, 2, 9, 12);
const currentTime = date.getHours();

let greeting;
const customStyle = {
  color: "",
  fontSize: "50px",
  fontWeight: "solid",
  margin: "15px 15px 15px 15px",
  borderBottom: "3px solid black"
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>
);
