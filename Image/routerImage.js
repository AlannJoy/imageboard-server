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

router.post("/image", (req, res, next) => {
  const image = req.body;
  console.log("Image body", image);
  Image.create(image)
    .then(image => {
      console.log("Image posted!");
      res.json(image);
    })
    .catch(error => next(error));
});

router.delete("/image/:id", (req, res, next) =>
  Image.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next)
);

module.exports = router;
