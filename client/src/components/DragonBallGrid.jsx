import React from "react";
import { DragonBallIcons } from "../assets/dragonBallsIndex";

const DragonBallGrid = (props) => {
  const { value } = props;
  return (
    <>
      <div className="p-3" style={{ width: "350px" }}>
        <div className="d-flex justify-content-center gap-3 mb-2">
          {/* 1 */}
          <div className="dot">
            {value >= 1 ? (
              <img
                src={DragonBallIcons[0]}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <></>
            )}
          </div>
          {/* 6 */}
          <div className="dot">
            {value >= 6 ? (
              <img
                src={DragonBallIcons[5]}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2 mb-2">
          {/* 2 */}
          <div className="dot">
            {value >= 2 ? (
              <img
                src={DragonBallIcons[1]}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <></>
            )}
          </div>
          {/* 7 */}
          <div className="dot">
            {value >= 7 ? (
              <img
                src={DragonBallIcons[6]}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <></>
            )}
          </div>
          {/* 5 */}
          <div className="dot">
            {value >= 5 ? (
              <img
                src={DragonBallIcons[4]}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 mb-2">
          {/* 3 */}
          <div className="dot">
            {value >= 3 ? (
              <img
                src={DragonBallIcons[2]}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <></>
            )}
          </div>
          {/* 4 */}
          <div className="dot">
            {value >= 4 ? (
              <img
                src={DragonBallIcons[3]}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default DragonBallGrid;
