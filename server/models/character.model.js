const mongoose = require("mongoose");

const combatStatsSchema = new mongoose.Schema({
  neutral: {
    type: Number,
    required: [
      true,
      "No neutral value provided. Provide a value for the character's neutral stat and try again.",
    ],
  },
  mix: {
    type: Number,
    required: [
      true,
      "No mix-up value provided. Provide a value for the character's mix stat and try again.",
    ],
  },
  damage: {
    type: Number,
    required: [
      true,
      "No damage value provided. Provide a value for the character's damage stat and try again.",
    ],
  },
});

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [
        true,
        "No name provided. Provide a character name and try again.",
      ],
    },
    icon: {
      type: String,
      required: [
        true,
        "No icon image URL provided. Provide an icon image URL and try again.",
      ],
    },
    portrait: {
      type: String,
      required: [
        true,
        "No portrait image URL provided. Provide a portrait image URL and try again.",
      ],
    },
    combatStats: {
      type: combatStatsSchema,
      required: [
        true,
        "No combat stats provided. Provide combat statistics for the character and try again.",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
