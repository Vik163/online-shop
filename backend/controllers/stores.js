const Card = require('../models/store');

module.exports.getCards = (req, res, next) => {
  Card.find()
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => next(err));
};

module.exports.addCard = (req, res, next) => {
  const { image, name, description, price } = req.body;
  Card.create({ image, name, description, price })
    .then((item) => res.send({ data: item }))
    .catch((err) => next(err));
};

module.exports.updateCard = (req, res, next) => {
  const { image, name, description, price, newProduct } = req.body;

  Card.findOneAndUpdate(
    { name: name },
    {
      image,
      name,
      description,
      price,
      newProduct,
    },
    {
      new: true,
      // runValidators: true,
      upsert: true,
    }
  )
    .then((card) => res.send({ date: card }))
    .catch((err) => next(err));
};
