const router = require('express').Router();

const { addCard, updateCard, getCards } = require('../controllers/stores');

router.get('/', getCards);
router.post('/', addCard);
router.patch('/', updateCard);

module.exports = router;
