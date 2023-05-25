import React from "react";
import TeamSlot from "./TeamSlot";
import TeamStatistics from "../views/TeamStatistics";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Team = (props) => {
  const renderTooltip = (props) => (
    <Tooltip id="coming-soon" {...props}>
      Coming Soon!
    </Tooltip>
  );

  const { team, removeFromTeam } = props;

  return (
    <fieldset>
      <div className="d-flex justify-content-around mb-3">
        <div className="text-center">
          <h2>Point</h2>
          <TeamSlot character={team.point} removeFromTeam={removeFromTeam} />
        </div>
        <div className="vr"></div>
        <div className="text-center">
          <h2>Mid</h2>
          <TeamSlot character={team.mid} removeFromTeam={removeFromTeam} />
        </div>
        <div className="vr"></div>
        <div className="text-center mb-3">
          <h2>Anchor</h2>
          <TeamSlot character={team.anchor} removeFromTeam={removeFromTeam} />
        </div>
      </div>
      <hr />
      <TeamStatistics team={team} />
      <div>
        <div className="d-flex justify-content-center mt-4">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <button
              type="button"
              className="btn btn-lg btn-success text-wrap"
              disabled={!(team.point && team.mid && team.anchor)}
            >
              View Full Details
            </button>
          </OverlayTrigger>
        </div>
      </div>
    </fieldset>
  );
};

export default Team;
