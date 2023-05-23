import React from "react";
import { Link } from "react-router-dom";
import TeamSlot from "./TeamSlot";

const Team = (props) => {
  const { portraits, setPortraits } = props;

  /**
   * Portrait click event: Removes a portrait from the portraits array
   * @param {Number} portraitIndex
   */
  const removeFromTeam = (portraitIndex) => {
    setPortraits(
      portraits.filter((portrait) => portrait !== portraits[portraitIndex])
    );
  };

  return (
    <fieldset>
      <div className="d-flex justify-content-around mb-3">
        <div className="text-center">
          <h2>Point</h2>
          <TeamSlot />
        </div>
        <div className="text-center">
          <h2>Mid</h2>
          <TeamSlot />
        </div>
        <div className="text-center">
          <h2>Anchor</h2>
          <TeamSlot />
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        {portraits.map((portrait, idx) => {
          return (
            <Link key={idx} onClick={(e) => removeFromTeam(idx)}>
              <img
                src={portrait}
                alt="character_portrait"
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

export default Team;
