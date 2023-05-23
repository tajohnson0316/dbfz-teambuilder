import React from "react";
import { Link } from "react-router-dom";

const TeamSlot = (props) => {
  const { portrait, removeFromTeam } = props;

  return (
    <div
      className="rounded border shadow p-2"
      style={{ width: "300px", height: "400px" }}
    >
      {portrait ? (
        <Link onClick={(e) => removeFromTeam(portrait)}>
          <img
            src={portrait}
            alt="character_portrait"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Link>
      ) : (
        <p>Add Char</p>
      )}
    </div>
  );
};

export default TeamSlot;
