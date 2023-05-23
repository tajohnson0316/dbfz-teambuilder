import React from "react";
import { Link } from "react-router-dom";
import { RosterPortraits } from "../assets/portraitsIndex";

const Portrait = () => {
  return (
    <div className="container d-flex justify-content-center flex-wrap gap-2">
      {RosterPortraits.map((icon, idx) => {
        return (
          <Link>
            <img
              key={idx}
              src={icon}
              alt="character_icon"
              className="rounded border shadow"
              style={{ maxWidth: "300px", maxHeight: "500px" }}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Portrait;
