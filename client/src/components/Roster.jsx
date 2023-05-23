import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RosterIcons } from "../assets/iconsIndex";
import { RosterPortraits } from "../assets/portraitsIndex";
import Team from "./Team";

const Roster = () => {
  const [portraits, setPortraits] = useState([]);

  const teamBlueprint = {
    point: "portrait",
    mid: "portrait",
    anchor: "portrait",
  };

  /**
   * Icon click event: Adds a portrait to the portraits array
   * @param {Number} iconIndex
   */
  const addToTeam = (iconIndex) => {
    setPortraits([...portraits, RosterPortraits[iconIndex]]);
  };

  return (
    <fieldset>
      <div className="container d-flex justify-content-center flex-wrap gap-2">
        {RosterIcons.map((icon, idx) => {
          return (
            <Link key={idx} onClick={(_e) => addToTeam(idx)}>
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
      <Team portraits={portraits} setPortraits={setPortraits} />
    </fieldset>
  );
};

export default Roster;
