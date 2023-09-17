// import mongoose from "mongoose";
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    src: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// export const Book = mongoose.model("Book", bookSchema);

const Song = mongoose.model("Song", songSchema);

module.exports = { Song };
