import "../assets/iconsIndex";
import "../assets/portraitsIndex";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Team from "./Team";

const Roster = () => {
  const refs = useRef({});

  const [characters, setCharacters] = useState([]);

  const [point, setPoint] = useState(null);
  const [mid, setMid] = useState(null);
  const [anchor, setAnchor] = useState(null);

  const [team, setTeam] = useState({ point, mid, anchor });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/characters")
      .then((response) => {
        console.log("✔ GET REQUEST SUCCESSFUL >>", response.data);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log("❌ ERROR IN GET REQUEST >>", error);
      });
  }, []);

  useEffect(() => {
    setTeam({ point, mid, anchor });
  }, [point, mid, anchor]);

  /**
   * Icon click event: Adds a character to an empty slot
   * @param {Event} e
   * @param {Object} character
   */
  const addToTeam = (character) => {
    if (point === null) {
      setPoint(character);
    } else if (mid === null) {
      setMid(character);
    } else {
      setAnchor(character);
    }

    refs.current[character._id].disabled = true;
    refs.current[character._id].style.filter = "grayscale(100%)";
  };

  /**
   * Portrait click event: Removes a character from a slot
   * @param {Number} characterID
   */
  const removeFromTeam = (characterID) => {
    if (point && point._id === characterID) {
      setPoint(null);
    } else if (mid && mid._id === characterID) {
      setMid(null);
    } else {
      setAnchor(null);
    }

    refs.current[characterID].disabled = false;
    refs.current[characterID].style.filter = "";
  };

  return (
    <fieldset className="p-3">
      <div className="container d-flex justify-content-center flex-wrap gap-2">
        {characters.map((character, idx) => {
          return (
            <input
              key={character._id}
              ref={(element) => (refs.current[character._id] = element)}
              type="image"
              src={character.icon}
              className="rounded border shadow"
              style={{ maxWidth: "85px", maxHeight: "55px" }}
              onClick={(e) => addToTeam(character, idx)}
            ></input>
          );
        })}
      </div>
      <hr />
      <Team team={team} removeFromTeam={removeFromTeam} />
    </fieldset>
  );
};

export default Roster;
