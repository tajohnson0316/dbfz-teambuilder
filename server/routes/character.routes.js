const characterController = require("../controllers/character.controller");

module.exports = (app) => {
  // *** GET ROUTES ***
  app.get("/api/characters", characterController.findAllCharacters);
  app.get("/api/characters/:id", characterController.findOneCharacterByID);
  app.get(
    "/api/characters/names/:name",
    characterController.findOneCharacterByName
  );

  // *** POST ROUTES ***
  app.post("/api/characters", characterController.createNewCharacter);

  // *** PATCH ROUTES ***
  app.patch("/api/characters/:id", characterController.updateOneCharacter);

  // *** DELETE ROUTES ***
  app.delete("/api/characters/:id", characterController.deleteOneCharacter);
};
