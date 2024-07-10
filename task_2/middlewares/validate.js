const { body } = require('express-validator');
const {
  SHARES_MIN, SHARES_MAX, BUY, SELL
} = require('../constants');

const tradeValidation = [
  body('type')
    .exists({ checkFalsy: true })
    .withMessage(
      'Type is mandatory',
    )
    .custom((value) => [BUY, SELL].includes(value))
    .withMessage(
      `Type should be either ${BUY} or ${SELL}`,
    ),
  body('user_id')
    .exists({ checkFalsy: true })
    .withMessage(
        'User id is mandatory',
    )
    .isInt()
    .withMessage(
        'User id should be integer',
    ),
  body('symbol')
    .exists({ checkFalsy: true })
    .withMessage(
        'Symbol is mandatory',
    )
    .isString()
    .withMessage(
        'Symbol should be string',
    ),
  body('shares')
    .exists({ checkFalsy: true })
    .withMessage(
      'Shares is mandatory',
    )
    .isInt({ min: SHARES_MIN, max: SHARES_MAX })
    .withMessage(
      `Shares minimum should be ${SHARES_MIN} and max should be ${SHARES_MAX}`,
    ),
  body('price')
    .exists({ checkFalsy: true })
    .withMessage(
      'Price is mandatory',
    )
    .isInt()
    .withMessage(
      'Price should be integer',
    ),
  body('timestamp')
    .exists({ checkFalsy: true })
    .withMessage(
        'Timestamp is mandatory',
    )
    .isInt()
    .withMessage(
      'Timestamp should be integer',
    ),
];

module.exports = {
    tradeValidation,
};
