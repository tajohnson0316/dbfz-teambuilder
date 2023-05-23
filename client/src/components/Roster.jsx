import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RosterIcons } from "../assets/iconsIndex";
import { RosterPortraits } from "../assets/portraitsIndex";
import Team from "./Team";

const Roster = () => {
  const [point, setPoint] = useState(null);
  const [mid, setMid] = useState(null);
  const [anchor, setAnchor] = useState(null);

  // const [team, setTeam] = useState({ point, mid, anchor });

  /**
   * Icon click event: Adds a portrait to the portraits array
   * @param {Number} iconIndex
   */
  const addToTeam = (iconIndex) => {
    if (point === null) {
      setPoint(RosterPortraits[iconIndex]);
    } else if (mid === null) {
      setMid(RosterPortraits[iconIndex]);
    } else {
      setAnchor(RosterPortraits[iconIndex]);
    }
  };

  /**
   * Portrait click event: Removes a portrait from the portraits array
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
    <fieldset>
      <div className="container d-flex justify-content-center flex-wrap gap-2">
        {RosterIcons.map((icon, idx) => {
          return (
            <Link key={idx} onClick={(e) => addToTeam(idx)}>
              <img
                src={icon}
                alt="character_icon"
                className="rounded border shadow"
                style={{ maxWidth: "85px", maxHeight: "55px" }}
              />
            </Link>
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
