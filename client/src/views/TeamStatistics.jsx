import React, { useEffect, useState } from "react";
import DragonBallGrid from "../components/DragonBallGrid";

const TeamStatistics = (props) => {
  const { team } = props;

  const [neutral, setNeutral] = useState(0);
  const [mix, setMix] = useState(0);
  const [damage, setDamage] = useState(0);

  useEffect(() => {
    setNeutral(4);
    setMix(5);
    setDamage(7);
  }, [team]);

  return (
    <>
      <h2 className="text-center mb-5">Team Statistics</h2>
      <div className="d-flex justify-content-around p-3">
        <div className="text-center">
          <h3 className="mb-3">
            Neutral:{" "}
            <span className="text-decoration-underline fs-2">{neutral}</span>
          </h3>
          <DragonBallGrid value={neutral} />
        </div>
        <div className="text-center">
          <h3 className="mb-3">
            Mix-Ups:{" "}
            <span className="text-decoration-underline fs-2">{mix}</span>
          </h3>
          <DragonBallGrid value={mix} />
        </div>
        <div className="text-center">
          <h3 className="mb-3">
            Damage:{" "}
            <span className="text-decoration-underline fs-2">{damage}</span>
          </h3>
          <DragonBallGrid value={damage} />
        </div>
      </div>
    </>
  );
};

export default TeamStatistics;
