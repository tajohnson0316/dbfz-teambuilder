const Character = require("../models/character.model");

// *** GET ALL ***
module.exports.findAllCharacters = (_request, response) => {
  /**
   * .find()
     @param: none 
   */
  Character.find()
    .then((allCharacters) => {
      console.log({ results: allCharacters });
      response.status(200).json({ results: allCharacters });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** GET ONE BY ID ***
module.exports.findOneCharacterByID = (request, response) => {
  /** 
    .findOne({_id: request.params.id})
    @param: the passed in "id" from the URL
  */
  Character.findOne({ _id: request.params.id })
    .then((character) => {
      console.log({ results: character });
      response.status(200).json({ results: character });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** GET ONE BY NAME ***
module.exports.findOneCharacterByName = (request, response) => {
  /** 
    .findOne({name: request.params.name})
    @param: the passed in name from the URL
  */
  Character.findOne({ name: request.params.name })
    .then((character) => {
      console.log({ results: character });
      response.status(200).json({ results: character });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** CREATE ONE ***
module.exports.createNewCharacter = (request, response) => {
  /** 
    .create({request.body})
    @param: the body/data of the client request
  */
  Character.create(request.body)
    .then((newCharacter) => {
      console.log({ results: newCharacter });
      response.status(200).json({ results: newCharacter });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** UPDATE ONE ***
module.exports.updateOneCharacter = (request, response) => {
  /**
    .findOneAndUpdate({_id: request.params.id}, request.body, {new, runValidators})
    @param: the passed in "id" from the URL
    @param: the body/data of the client request
    @param: update options
  */
  Character.updateOne({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((character) => {
      console.log("UPDATE RESULTS ==>", character);
      response.status(200).json({ results: character });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** DELETE ONE ***
module.exports.deleteOneCharacter = (request, response) => {
  /**
    .deleteOne({_id: request.params.id})
    @param: the passed in "id" from the URL
  */
  Character.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.status(200).json(deleteConfirmation))
    .catch((error) => response.status(400).json(error));
};
