import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

const TeamSlot = (props) => {
  const { portrait, removeFromTeam } = props;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <fieldset>
      {portrait ? (
        <>
          <button
            type="button"
            className="btn p-0 rounded border shadow p-2"
            style={{ width: "300px", height: "400px" }}
            onClick={(e) => removeFromTeam(portrait)}
          >
            <img
              src={portrait}
              alt="character_portrait"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </button>
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
            <div className="card card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              accusamus, mollitia aperiam corrupti cum sunt sapiente, iusto,
              officia quo accusantium et commodi nam adipisci laboriosam
              molestiae ex at suscipit beatae?
            </div>
          </Collapse>
        </>
      ) : (
        <>
          <div
            className="rounded border shadow p-2"
            style={{ width: "300px", height: "400px" }}
          >
            <p>Add Char</p>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
            >
              <p>Click for more info</p>
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
