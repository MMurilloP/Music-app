// import express from "express";
// import { Song } from "../models/SongModel.js";
const express = require("express");

const { Song } = require("../models/songModel.js");

const router = express.Router();

// create a Song
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.artist || !req.body.src || !req.body.img) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newSong = {
      title: req.body.title,
      artist: req.body.artist,
      img: req.body.img,
      src: req.body.src,
    };
    const createSong = await Song.create(newSong);
    return res.status(201).send(createSong);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// get all Songs
router.get("/", async (req, res) => {
  try {
    const Songs = await Song.find({});
    return res.status(200).send(Songs);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//get one Song by id
router.get("/:id", async (req, res) => {
  try {
    const Song = await Song.findById(req.params.id);

    if (!Song) {
      return res.status(404).send({ message: "Song not found" });
    }
    return res.status(200).send(Song);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//update one Song by id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.artist || !req.body.src || !req.body.img) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const songByIdUpdate = await Song.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (!songByIdUpdate) {
      return res.status(404).send({ message: "Song not found" });
    }

    return res.status(200).send({ message: "Song updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//delete one Song by id

router.delete("/:id", async (req, res) => {
  try {
    const songByIdDelete = await Song.findByIdAndDelete(req.params.id);
    if (!songByIdDelete) {
      return res.status(404).send({ message: "Song not found" });
    }
    return res.status(200).send({ message: "Song deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// export default router;
module.exports = router;
