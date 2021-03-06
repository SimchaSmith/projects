const express = require("express");
const { validateCard, generateBizNumber, Card } = require("../models/cardsM");
const router = express.Router();
const auth = require("../middleware/authM");

router.post("/", auth, async (req, res) => {
  // validate user's input
  const { error } = validateCard(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // validate system

  // process
  const card = new Card({
    ...req.body,
    bizImage: req.body.bizImage
      ? req.body.bizImage
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    bizNumber: await generateBizNumber(),
    user_id: req.user._id,
  });
  await card.save();
  //   response ok
  res.json(card);
});

router.delete("/:id", auth, async (req, res) => {
  const card = await Card.findByIdAndRemove({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!card) {
    res.status(404).send("the card with the given ID was not found");
    return;
  }
  res.json(card);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateCard(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  let card = await Card.findOneAndUpdate(
    {
      _id: req.params.id,
      user_id: req.user._id,
    },
    req.body
  );
  if (!card) {
    res.status(404).send("the card with the given was not found");
    return;
  }
  card = await Card.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  res.json(card);
});

router.get("/:id", auth, async (req, res) => {
  const card = await Card.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!card) {
    res.status(404).send("the card with the given was not found");
    return;
  }

  res.json(card);
});

router.get("/", auth, async (req, res) => {
  cardALL = await Card.find({ user_id: req.user._id });
  if (cardALL) {
    res.json(cardALL);
    return;
  }
});
module.exports = router;
