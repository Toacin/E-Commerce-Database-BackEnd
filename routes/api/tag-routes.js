const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    let data = await Tag.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(data);
  }
  catch (err) {
    res.json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    let data = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Product }]
    });
  
    if (!data) {
      return res.status(404).json("Invalid Field");
    }
  
    res.status(200).json(data);
  }
  catch (err) {
    res.json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    await Tag.create(req.body)
    res.status(200).json("Tag created")
  }
  catch (err) {
    res.json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    let data = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
  
    if (!data) {
      return res.status(404).json("Invalid Field");
    }
  
    res.status(200).json("Tag updated")
  }
  catch (err) {
    res.json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    let data = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
  
    if (!data) {
      return res.status(404).json("Invalid Field");
    }
  
  
    res.status(200).json("Tag deleted")
  }
  catch (err) {
    res.json(err)
  }
});

module.exports = router;
