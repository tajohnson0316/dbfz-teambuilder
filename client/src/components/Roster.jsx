import React, { useState, useEffect } from "react";
import { RosterIcons } from "../assets/iconsIndex";
import { RosterPortraits } from "../assets/portraitsIndex";
import Team from "./Team";

const Roster = () => {
  const [point, setPoint] = useState(null);
  const [mid, setMid] = useState(null);
  const [anchor, setAnchor] = useState(null);

  /**
   * Icon click event: Adds a character to an empty slot
   * @param {Number} iconIndex
   */
  const addToTeam = (e, iconIndex) => {
    if (point === null) {
      setPoint(RosterPortraits[iconIndex]);
    } else if (mid === null) {
      setMid(RosterPortraits[iconIndex]);
    } else {
      setAnchor(RosterPortraits[iconIndex]);
    }
    e.target.style.filter = "grayscale(100%)";
    e.target.disabled = true;
  };

  /**
   * Portrait click event: Removes a character from a slot
   * @param {String} portrait
   */
  const removeFromTeam = (portrait) => {
    if (point === portrait) {
      setPoint(null);
    } else if (mid === portrait) {
      setMid(null);
    } else {
      setAnchor(null);
    }
  };

  return (
    <fieldset className="p-3">
      <div className="container d-flex justify-content-center flex-wrap gap-2">
        {RosterIcons.map((icon, idx) => {
          return (
            <input
              key={idx}
              type="image"
              src={icon}
              className="rounded border shadow"
              style={{ maxWidth: "85px", maxHeight: "55px" }}
              onClick={(e) => {
                addToTeam(e, idx);
              }}
            ></input>
          );
        })}
      </div>
      <hr />
      <Team
        point={point}
        mid={mid}
        anchor={anchor}
        removeFromTeam={removeFromTeam}
      />
    </fieldset>
  );
};

export default Roster;
