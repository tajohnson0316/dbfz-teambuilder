import React, { useState, useEffect } from "react";
import TeamSlot from "./TeamSlot";
import TeamStatistics from "../views/TeamStatistics";

const Team = (props) => {
  const { point, mid, anchor, removeFromTeam } = props;

  const [team, setTeam] = useState({ point, mid, anchor });

  useEffect(() => setTeam({ point, mid, anchor }), [point, mid, anchor]);

  return (
    <fieldset>
      <div className="text-center mb-5">
        <h1>Your Team</h1>
      </div>
      <div className="d-flex justify-content-around mb-3">
        <div className="text-center">
          <h2>Point</h2>
          <TeamSlot portrait={team.point} removeFromTeam={removeFromTeam} />
        </div>
        <div className="text-center">
          <h2>Mid</h2>
          <TeamSlot portrait={team.mid} removeFromTeam={removeFromTeam} />
        </div>
        <div className="text-center mb-3">
          <h2>Anchor</h2>
          <TeamSlot portrait={team.anchor} removeFromTeam={removeFromTeam} />
        </div>
      </div>
      <hr />
      <TeamStatistics team={team} />
      <div>
        <div className="d-flex justify-content-center mt-5">
          <button
            type="button"
            className="btn btn-lg btn-success"
            disabled={!(team.point && team.mid && team.anchor)}
          >
            View Full Details
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default Team;
