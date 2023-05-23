import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RosterIcons } from "../assets/iconsIndex";
import { RosterPortraits } from "../assets/portraitsIndex";

const Roster = () => {
  const iconsAndPortraits = RosterIcons.map((icon, idx) => [
    icon,
    RosterPortraits[idx],
  ]);

  const [portraits, setPortraits] = useState([]);

  /**
   * Icon click event: Adds a portrait to the portraits array
   * @param {Number} iconIndex
   */
  const selectFromIcon = (iconIndex) => {
    setPortraits([...portraits, iconsAndPortraits[iconIndex][1]]);
  };

  /**
   * Portrait click event: Removes a portrait from the portraits array
   * @param {Number} portraitIndex
   */
  const removeSelection = (portraitIndex) => {
    setPortraits(
      portraits.filter((portrait, idx) => portrait !== portraits[portraitIndex])
    );
  };

  return (
    <fieldset>
      <div className="container d-flex justify-content-center flex-wrap gap-2">
        {iconsAndPortraits.map((iconAndPortrait, idx) => {
          return (
            <Link key={idx} onClick={(e) => selectFromIcon(idx)}>
              <img
                src={iconAndPortrait[0]}
                alt="character_icon"
                className="rounded border shadow"
                style={{ maxWidth: "85px", maxHeight: "55px" }}
              />
            </Link>
          );
        })}
      </div>
      <hr />
      <div className="d-flex justify-content-around align-items-center">
        {portraits.map((portrait, idx) => {
          return (
            <Link key={idx} onClick={(e) => removeSelection(idx)}>
              <img
                src={portrait}
                alt="character_icon"
                className="rounded border shadow"
                style={{ maxWidth: "300px", maxHeight: "500px" }}
              />
            </Link>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Roster;
