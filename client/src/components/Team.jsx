import React from "react";
import TeamSlot from "./TeamSlot";

const Team = (props) => {
  const { point, mid, anchor, removeFromTeam } = props;

  return (
    <fieldset>
      <div className="d-flex justify-content-around mb-3">
        <div className="text-center">
          <h2>Point</h2>
          <TeamSlot portrait={point} removeFromTeam={removeFromTeam} />
        </div>
        <div className="text-center">
          <h2>Mid</h2>
          <TeamSlot portrait={mid} removeFromTeam={removeFromTeam} />
        </div>
        <div className="text-center">
          <h2>Anchor</h2>
          <TeamSlot portrait={anchor} removeFromTeam={removeFromTeam} />
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        {/* {portraits.map((portrait, idx) => {
          return (
            <Link key={idx} onClick={(e) => removeFromTeam(portrait)}>
              <img
                src={portrait}
                alt="character_portrait"
                className="rounded border shadow"
                style={{ maxWidth: "300px", maxHeight: "500px" }}
              />
            </Link>
          );
        })} */}
      </div>
    </fieldset>
  );
};

export default Team;
