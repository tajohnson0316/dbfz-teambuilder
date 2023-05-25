import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

const TeamSlot = (props) => {
  const { character, removeFromTeam } = props;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <fieldset>
      {character ? (
        <>
          <button
            type="button"
            className="btn p-0 rounded border shadow p-2 mb-1"
            style={{ width: "300px", height: "400px" }}
            onClick={(e) => removeFromTeam(character._id)}
          >
            <img
              src={character.portrait}
              alt="character_portrait"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </button>
          <div className="card card-body fst-italic fs-3">{character.name}</div>
          <div className="d-grid">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <>
                  <p>Click to close</p>
                  <CaretUpFill className="fs-3" />
                </>
              ) : (
                <>
                  <p>Click for more info</p>
                  <CaretDownFill className="fs-3" />
                </>
              )}
            </button>
          </div>
          <Collapse in={collapsed} style={{ width: "300px" }}>
            <div className="card card-body">- Coming Soon -</div>
          </Collapse>
        </>
      ) : (
        <>
          <div
            className="d-flex flex-column justify-content-end rounded border shadow p-2"
            style={{ width: "300px", height: "400px" }}
          >
            <div className="fst-italic text-center mb-3">
              <p>
                Click above to <span className="text-success fw-bold">ADD</span>{" "}
                to your team
              </p>
              <hr />
              <p>
                Click here on portraits to{" "}
                <span className="text-danger fw-bold">REMOVE</span>
              </p>
            </div>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              disabled
            >
              <p>Waiting for input . . .</p>
              <CaretDownFill />
            </button>
          </div>
          <Collapse in={collapsed} style={{ width: "300px" }}>
            <div className="card card-body">- Character Required -</div>
          </Collapse>
        </>
      )}
    </fieldset>
  );
};

export default TeamSlot;
