const { Router } = require("express");
const Image = require("./modelImage");
const router = new Router();

router.get("/image", async function(req, res, next) {
  try {
    const images = await Image.findAll();
    res.send(images);
    console.log("Images sent");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
