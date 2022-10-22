const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  let data = await Tag.findAll({
    include: [{ model: Product }],
  })
  res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  let data = await Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{ model: Product }]
  });

  res.status(200).json(data);
});

router.post('/', async (req, res) => {
  // create a new tag
  await Tag.create(req.body)
  res.status(200).json("Tag created")
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json("Tag updated")
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json("Tag deleted")
});

module.exports = router;
