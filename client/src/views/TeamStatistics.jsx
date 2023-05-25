import React, { useEffect, useState } from "react";
import DragonBallGrid from "../components/DragonBallGrid";

const TeamStatistics = (props) => {
  const { team } = props;

  const [neutral, setNeutral] = useState(0);
  const [mix, setMix] = useState(0);
  const [damage, setDamage] = useState(0);

  useEffect(() => {
    if (team.point && team.mid && team.anchor) {
      let neutralSum = 0,
        mixSum = 0,
        damageSum = 0;
      for (let slot in team) {
        neutralSum += team[slot].combatStats.neutral;
        mixSum += team[slot].combatStats.mix;
        damageSum += team[slot].combatStats.damage;
        console.log(team[slot]);
      }
      setNeutral(Math.floor(neutralSum / 3));
      setMix(Math.floor(mixSum / 3));
      setDamage(Math.floor(damageSum / 3));
    } else {
      setNeutral(0);
      setMix(0);
      setDamage(0);
    }
  }, [team]);

  return (
    <>
      <h2 className="text-center mb-4">Team Statistics</h2>
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
